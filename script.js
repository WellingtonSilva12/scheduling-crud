var selectedRow = null

function onFormSubmit(e) {
  event.preventDefault()
  var formData = readFormData()
  if (selectedRow == null) {
    insertNewRecord(formData)
  } else {
    updateRecord(formData)
  }
  resetForm()
}

//Retrieve the data
function readFormData() {
  var formData = {}
  formData['task'] = document.getElementById('task').value
  formData['description'] = document.getElementById('description').value

  return formData
}

//Insert the data
function insertNewRecord(data) {
  var table = document
    .getElementById('storeList')
    .getElementsByTagName('tbody')[0]
  var newRow = table.insertRow(table.length)
  cell1 = newRow.insertCell(0)
  cell1.innerHTML = data.task
  cell2 = newRow.insertCell(1)
  cell2.innerHTML = data.description
  cell3 = newRow.insertCell(2)
  cell3.innerHTML = `<button onClick="onEdit(this)" class="green">Edit</button> <button onClick="onDelete(this)">Delete</button>`
}

//Edit the data
function onEdit(td) {
  selectedRow = td.parentElement.parentElement
  document.getElementById('task').value = selectedRow.cells[0].innerHTML
  document.getElementById('description').value = selectedRow.cells[1].innerHTML
}
function updateRecord(formData) {
  selectedRow.cells[0].innerHTML = formData.task
  selectedRow.cells[1].innerHTML = formData.description
}

//Delete the data
function onDelete(td) {
  if (confirm('Do you want to delete this record?')) {
    row = td.parentElement.parentElement
    document.getElementById('storeList').deleteRow(row.rowIndex)
    resetForm()
  }
}

//Reset the data
function resetForm() {
  document.getElementById('task').value = ''
  document.getElementById('description').value = ''

  selectedRow = null
}
