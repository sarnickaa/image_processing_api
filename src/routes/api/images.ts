import express from 'express';   
const images = express.Router();
import { ImageParams } from '../../../src/@customTypes/imageTypes'
import transform from '../../../services/transformer/transform'

images.get('/', async (req, res) => { 
  const params = (req.query as unknown) as ImageParams
  // allow destructuring against custom type:
  const { filename, width, height } = params

  //do transformation
  const transformedImage = await transform(filename, width, height)
  console.log('image convert route 💌', transformedImage)

  res.send(transformedImage)
});

export default images