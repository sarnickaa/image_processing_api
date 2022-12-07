import transform from '../../services/transformer/transform'
import locate from '../../services/locator/locate'

describe('Test image location and transformation', () => {
  it('returns an error if full size image is missing', async () => {
    const result = (await transform(
      'unknown.jpg',
      '300',
      '300'
    )) as unknown as Error
    expect(result).toBeInstanceOf(Error)
    expect(result.message).toContain('ENOENT: no such file or directory')
  })

  it('reads in an existing full size image as a Buffer', async () => {
    const result = await locate('cows_test.jpg', '600', '600')
    expect(result).toBeInstanceOf(Buffer)
  })

  it('returns an existing resized image', async () => {
    const result = await transform('cows_test.jpg', '300', '300')
    expect(result).toBeInstanceOf(String)
    expect(result).toContain('300-300-cows_test.jpg')
  })
})
