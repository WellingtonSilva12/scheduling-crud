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
  formData['productCode'] = document.getElementById('productCode').value
  formData['product'] = document.getElementById('product').value

  return formData
}

//Insert the data
function insertNewRecord(data) {
  var table = document
    .getElementById('storeList')
    .getElementsByTagName('tbody')[0]
  var newRow = table.insertRow(table.length)
  cell1 = newRow.insertCell(0)
  cell1.innerHTML = data.productCode
  cell2 = newRow.insertCell(1)
  cell2.innerHTML = data.product
  cell3 = newRow.insertCell(2)
  cell3.innerHTML = `<button onClick="onEdit(this)" class="green">Edit</button> <button onClick="onDelete(this)">Delete</button>`
}

//Edit the data
function onEdit(td) {
  selectedRow = td.parentElement.parentElement
  document.getElementById('productCode').value = selectedRow.cells[0].innerHTML
  document.getElementById('product').value = selectedRow.cells[1].innerHTML
}
function updateRecord(formData) {
  selectedRow.cells[0].innerHTML = formData.productCode
  selectedRow.cells[1].innerHTML = formData.product
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
  document.getElementById('productCode').value = ''
  document.getElementById('product').value = ''

  selectedRow = null
}