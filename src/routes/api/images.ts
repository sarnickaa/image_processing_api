import express from 'express'
const images = express.Router()
import transform from '../../../services/transformer/transform'
import { validateParams } from '../../utils/utils'

images.get('/', async (req, res) => {
  const params = req.query
  const { filename, width, height } = params

  // validate params:
  try {
    validateParams(filename, width, height)

    //do transformation:
    const transformedImagePath = await transform(filename, width, height)

    if (!(transformedImagePath instanceof Error)) {
      res.sendFile((transformedImagePath as unknown) as string)
    } else {
      if (transformedImagePath.message) {
        res.status(404).json({ error: transformedImagePath.message })
      } else {
        res.status(500).json({ error: 'Server Error' })
      }
    }
  } catch (err) {
    console.error('😿 Oh No! Incorrect params supplied...')
    if (err instanceof Error) {
      res.status(500).json({ error: err.message })
    }
  }
})

export default images
