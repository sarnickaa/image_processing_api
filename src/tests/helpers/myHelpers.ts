import fs from 'fs'
import path from 'path'

beforeAll(function () {
  fs.copyFileSync(
    path.resolve(`${__dirname}/../../../../src/tests/assets/cows_test.jpg`),
    path.resolve(`${__dirname}/../../../full/cows_test.jpg`)
  )
  fs.copyFileSync(
    path.resolve(
      `${__dirname}/../../../../src/tests/assets/300-300-cows_test.jpg`
    ),
    path.resolve(`${__dirname}/../../../thumbs/300-300-cows_test.jpg`)
  )
})

afterAll(function () {
  fs.rmSync(path.resolve(`${__dirname}/../../../thumbs`), {
    recursive: true,
    force: true
  })
  fs.rmSync(path.resolve(`${__dirname}/../../../full`), {
    recursive: true,
    force: true
  })
})
