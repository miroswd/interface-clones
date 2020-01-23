function randomColor() {
  // Gerando código hexadecimal
  const characters = 'ABCDEF0123456789';
  let hex = []

  for (c=0;c<6;c++){
    let random = Math.floor(Math.random() * 16)
    hex.push(characters.substring(random, random + 1))
  }

  return `#${hex.join('')}`
}