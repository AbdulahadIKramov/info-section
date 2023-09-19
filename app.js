const nav = document.querySelector('.nav_collection')
const menu = document.querySelector('.hamburger')
const close = document.querySelector('.close')
const shadow = document.querySelector('.shadow')
const collectionSelect_1 = document.querySelector('.collection_select_1')
const collectionSelect_2 = document.querySelector('.collection_select_2') 
const item_1 = document.querySelector('#item_1')
const item_2 = document.querySelector('#item_2')
const transformImg_1 = document.querySelector('.image_1')
const transformImg_2 = document.querySelector('.image_2')

menu.addEventListener('click', () => {
  nav.classList.add('active');
  setTimeout(function() {shadow.style.display = 'block';} ,200)
})


close.addEventListener('click', () => {
  nav.classList.remove('active');
  shadow.style.display = 'none';
})

item_1.addEventListener('click', () => {
  collectionSelect_1.classList.toggle('block')
  transformImg_1.classList.toggle('transform')
})
item_2.addEventListener('click', () => {
  collectionSelect_2.classList.toggle('block')
  transformImg_2.classList.toggle('transform')
})