// creating variables
let form = document.getElementById('addForm')
let itemList = document.getElementById('items')
let filter = document.getElementById('filter')

// form submit events
form.addEventListener('submit',addItem)

//delete event or added  items
itemList.addEventListener('click', removeItem)

// filtering or searching text
filter.addEventListener('keyup',filterItems)


//Add Items
function addItem(e){
    e.preventDefault()
    
    //get input val
    let newItem = document.getElementById('item').value

    //create new li
    let li = document.createElement('li')
    //class
    li.className = 'list-group-item'
    //console.log(li)

    //add textNode with input value
    li.appendChild(document.createTextNode(newItem))
    
    //Create a delete Button
    let deleteBtn = document.createElement('button');
    
    //adding class to the button
    deleteBtn.className ='btn btn-danger btn-sm float-end delete'
    
    //append btn
    deleteBtn.appendChild(document.createTextNode('X'))
    li.appendChild(deleteBtn)

    //append li to list
    itemList.appendChild(li)
}

function removeItem(e){
    if(e.target.classList.contains('delete')){
            let li = e.target.parentElement
            itemList.removeChild(li)
    }
}

function filterItems(e){
    // converting all the text to lower case
    let text = e.target.value.toLowerCase()
    let items = itemList.getElementsByTagName('li')
    //converting into array
    Array.from(items).forEach(function(item){
        let itemName = item.firstChild.textContent
        if(itemName.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block'
        } else{
            item.style.display = 'none'
        }
    })
}