import sharp, { OutputInfo } from 'sharp'
import locator from '../locator/locate'
import path from 'path'

export default async (filename: unknown, width: unknown, height: unknown) => {
  let rsHeight = parseInt(height as string)
  let rsWidth = parseInt(width as string)

  // get image buffer or return filepath string if image exists:
  const image = (await locator(filename, width, height)) as unknown as
    | string
    | Error
    | Buffer

  //If Buffer, resize image and save to file. Return filepath:
  if (Buffer.isBuffer(image)) {
    console.info('🫡 performing resize...')
    try {
      await sharp(image)
        .resize({
          width: rsWidth,
          height: rsHeight
        })
        .toFile(`${__dirname}/../../thumbs/${width}-${height}-${filename}`)
      return path.resolve(
        `${__dirname}/../../thumbs/${width}-${height}-${filename}`
      ) as string
    } catch (err) {
      console.error('🫣 oh no! there was an error performing resize...')
      return err
    }
  } else if (typeof image === 'string' && image !== '') {
    console.info('👍 resized image already exists...')
    return path.resolve(
      `${__dirname}/../../thumbs/${width}-${height}-${filename}`
    ) as string
  } else {
    return image
  }
}
