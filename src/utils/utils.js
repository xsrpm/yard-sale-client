export const resizeImage = (url, width, height) => {
  const regex = /(?<=\/)[0-9]{3}\/[0-9]{3}/i
  return url.replace(regex, `${width}/${height}`)
}
