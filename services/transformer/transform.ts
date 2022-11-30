import sharp from 'sharp';

export default async (filename: string, width: string, height: string) => {
  let rsHeight = parseInt(height);
  let rsWidth = parseInt(width);
  // get image from filesystem
  let image
  
  const resizedImage = sharp(image)
    .resize({
      width: rsWidth,
      height: rsHeight
    })

    //write altered image to folder
    await resizedImage.toFile('my-location');
  
  return {
    filename,
    width,
    height
  }
}
