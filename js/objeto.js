let items = localStorage.getItem('itemsList')
items = items ? JSON.parse(items) : []

showItems()

function addItem() {
    let nameItem = document.getElementById('item').value
    let correoItem = document.getElementById('correo').value
    let telefonoItem = document.getElementById('telefono').value
    
    if (nameItem && correoItem && telefonoItem) {
        items.push({ 'nombreCliente': nameItem,'correoCliente': correoItem, 'telefonoCliente': telefonoItem })
        showItems()
    }
}

function showItems() {
    document.getElementById('item').value = ''
    document.getElementById('correo').value = ''
    document.getElementById('telefono').value = ''
    let html = ''
    items.forEach((i, index) => {
        html += `<div class="col-4 mb-3" > ${i.nombreCliente}</div>`
        html += `<div class="col-4 mb-3" > ${i.telefonoCliente}</div>`
        html += `<div class="col mb-3" > ${i.correoCliente} </div>`
        html += `<div class="col"> <a href="#" onclick="deleteItem(${index})" class="btn btn-danger" >X</a> </div>`
    })
    localStorage.setItem('itemsList', JSON.stringify(items))
    document.getElementById('items').innerHTML = html
}

function deleteItem(item) {
    //console.log(item);
    items.splice(item, 1)
    showItems()
}