import sharp, { OutputInfo } from 'sharp';
import locator from '../locator/locate';
import path from 'path'


export default async (filename: string, width: string, height: string) => {
  let rsHeight = parseInt(height);
  let rsWidth = parseInt(width);
  
      // get image buffer from filesystem or return filepath string if image exists:
      const image = ((await locator(filename, width, height) as unknown) as string | Error | Buffer)

      //resize image and save to file if it doesn't exist already
      if (Buffer.isBuffer(image)) {
        try {
          await sharp(image).resize({
            width: rsWidth,
            height: rsHeight
          }).toFile(`${__dirname}/../../thumbs/${width}-${height}-${filename}`)
          return path.resolve(`${__dirname}/../../thumbs/${width}-${height}-${filename}`)
        } catch (err) {
          console.log('error!! 🔥', err)
        }
  } else if (typeof image === 'string') {
    return path.resolve(`${__dirname}/../../thumbs/${width}-${height}-${filename}`)
  } else {
    return image
  }
}
