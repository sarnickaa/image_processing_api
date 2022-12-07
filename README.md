# image_processing_api

The Image Processing API can be used in 2 ways:
1. It will provide a URL to an image the user has saved on disk with the desired image size set by URL parameters. This link can then be used on the frontend for rapid prototyping.
2. It will function as a library serving appropriatley scaled images to the frontend, eliminating the need to upload and store multiple image files withing a client codebase.

- [How to use this API](#how-to-use-this-api)
- [Build](#build)
- [Test](#testing)
- [Improvements](#improvements)

## How to use this API:
1. run the API:
- clone the project repo.
- navigate to the root.
- install dependencies:
```
npm install
```
- start the application:
```
npm run start
```
This will create a `full` directory at the root of the repo if it doesnt already exist and start the application.
- the main API rout can then be accessed at `localhost:3000/api`

2. Upload images:
- Upload any fullsize `.jpg` images you wish to resize to the `full` directory. (the api currently only supports a `.jpg` extension.)

3. Resize an image:
- access the `localhost:3000/api/images/?filename={filename.jpg}&height={px}&width={px}`; supplying the desired image filename, width and height.
- the resized image will be served to the above URL.
- the resized image will also be saved to a `thumbs` directory at the root of the repository according to the following convention: `*/thumbs/{width}-{height}-{filename}`

## Build:
1. To build and compile to JS, run the following command:
```
npm run build
``` 
2. To run the application from the build folder:
- navigate to `build/src`
- run the following command to start the application:
```
node .
```

3. Create a `full` directory. This can be done by either:
- copying the existing `full` directory from the project root by running:
```
npm run copy:images
```
- creating the directory manually and uploading desired `.jpg` fullsize files.

4. Resize an image:
The resize process is the same as that described in [How to use this API](#how-to-use-this-api) - step 3

## Testing:
1. Run the test suite with the following command:
```
npm run test

```
- note: currently, running the test suite will delete existing `build/full` and `build/thumbs` directories and contents

2. Run the linter with the following command:
```
npm run lint
```
- note: currently, the following directories are excluded from linting:
    -   src/tests/assets
    -   src/tests/helpers
    
## Improvements
