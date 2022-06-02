'use strict'

var openModal = function () {
  document.getElementById('modal').classList.add('active')
}

var closeModal = function () {
  document.getElementById('modal').classList.remove('active')
}

document.getElementById('registerActivity').addEventListener('click', openModal)

document.getElementById('modalClose').addEventListener('click', closeModal)

document.getElementById('modalCancel').addEventListener('click', closeModal)
