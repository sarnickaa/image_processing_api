import express from 'express'
import routes from './routes'

const app = express()
const port = 3000

app.use('/api', routes)

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`)
})

export default app
