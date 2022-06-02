'use strict'

var openModal = function () {
  document.getElementById('modal').classList.add('active')
}

var closeModal = function () {
  document.getElementById('modal').classList.remove('active')
}

//Eventos

document.getElementById('registerActivity').addEventListener('click', openModal)

document.getElementById('modalClose').addEventListener('click', closeModal)

document.getElementById('modalCancel').addEventListener('click', closeModal)

// CRUD
function readFormData() {
  var formData = {}
  formData['nameTask'] = document.getElementById('nameTask').value
  formData['descriptionTask'] = document.getElementById('descriptionTask').value

  return formData
}
