// Accessing a  refrence to the element by its ID
let header = document.getElementById('header-title')
console.log(document.childNodes)
// get child nodes of header grabbed using getElementById
let childern = header.childNodes
console.log(childern);


// Accessing DOM elements

// returns a refrence to the element by it ID
let header1 = document.getElementById('header-title')

//returns an array-like object of all child elements with
// the given class-name
let forms = document.getElementsByClassName('container')
console.log(forms)

//returns an HTML COLLECTION of elements with the given
//tag name
let usingTag = document.getElementsByTagName('ul')
console.log(usingTag)

//returns first element within the document that matches the
//specified group of selectors
let usingQuery = document.querySelector('.list-group')


// CREATING NEW DOM ELEMENTS

// issue with the code below, it is not inserting the new
// DOM element
let newHeading = document.createElement("h1")
let h1Text = document.createTextNode("New Element inserted by DOM")
newHeading.appendChild(h1Text)