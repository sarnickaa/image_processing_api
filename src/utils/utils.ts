const validateParams = (filepath: unknown, width: unknown, height: unknown) => {
  if (!(filepath && width && height)) {
    throw new Error(
      `Missing required query params: [filepath: ${filepath}, width: ${width}, height: ${height}]`
    )
  }
}

export { validateParams }
