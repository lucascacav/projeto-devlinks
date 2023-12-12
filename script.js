function toggleMode () {
  const html = document.documentElement

  // pegar a tag img
  const img = document.querySelector('#profile img')

  //substituir a imagem

  if (html.classList.contains('light')) {
    img.setAttribute('src', './assets/avatar-light.png')
    img.setAttribute('alt', 'Mayk Brito sorrindo com óculos normal')
  } else {
    img.setAttribute("src", "./assets/avatar-dark.png")
    img.setAttribute("alt", "Mayk Brito sorrindo com óculos escuro")
  }
  html.classList.toggle('light')
}

