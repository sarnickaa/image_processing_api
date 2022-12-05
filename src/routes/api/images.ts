import express from 'express';   
const images = express.Router();
import { ImageParams } from '../../../src/@customTypes/imageTypes'
import transform from '../../../services/transformer/transform'

images.get('/', async (req, res) => { 
  const params = ((req.query as unknown) as ImageParams)
  // allow destructuring against custom type:
  const { filename, width, height } = params

  //do transformation:
    const transformedImagePath = await transform(filename, width, height)

    if(!(transformedImagePath instanceof Error)) {
      res.sendFile((transformedImagePath as unknown) as string)
    } else {
      res.status(404).json({"error": transformedImagePath.message})
    }
});

export default images