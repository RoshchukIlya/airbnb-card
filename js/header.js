export const Header = () => {
  // console.log(document.getElementById('header')); // если бы header был в html
  // const headerTag = document.querySelectorAll('.header'); // . - обращение по классу, # - обращение по ID

  // Создание объектов тега
  const header = document.createElement('header')
  const container = document.createElement('div')
  const wrapper = document.createElement('div')
  const link = document.createElement('a')
  const logoImg = document.createElement('img')
  const createImg = document.createElement('div')
  const createImgElement = document.createElement('img')


  // Добавление атрибутов 
  header.classList.add('header')
  container.classList.add('container')
  wrapper.classList.add('header-wrapper')
  link.classList.add('header-link')
  logoImg.classList.add('link__logo')
  createImg.classList.add('header-create')
  createImgElement.classList.add('create__ImgElement')
  link.href = '/'
  logoImg.src = '../img/logo.svg'
  createImgElement.src = '../img/header-create.svg'

  header.append(container)
  container.append(wrapper)
  createImg.append(createImgElement)
  wrapper.append(link, createImg)
  link.append(logoImg)

  return header;
}

/* Todo
 1. Header
 2. Container
 3. Wrapper for Header
 4. Link
 5. Logo Img 
 6. Header create
*/
