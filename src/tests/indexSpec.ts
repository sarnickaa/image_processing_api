import supertest from 'supertest'
import app from '../index'

const request = supertest(app)

describe('Test endpoint responses', () => {
  it('returns an error if required image params are missing', async () => {
    const response = await request.get('/api/images')
    expect(response.status).toBe(500)
  })

  it('gets the image convert endpoint with valid query params', async () => {
    const response = await request.get('/api/images').query({
      filename: 'cows_test.jpg',
      width: '300',
      height: '300'
    })
    expect(response.status).toBe(200)
  })
})
