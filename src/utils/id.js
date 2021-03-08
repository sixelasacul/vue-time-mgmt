// Adds up the ascii code for each character
export const stringToId = str =>
  str.split('').reduce((acc, char) => acc + char.charCodeAt(), 0)
