const validateParams = (filepath: string, width: string, height: string) => {
   if (!(filepath && width && height)) {
       throw new Error(`missing params: [filepath: ${filepath}, width: ${width}, height: ${height}]`)
   }
}

export { validateParams };
