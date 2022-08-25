// Reading an Element from the Document
const h1 = document.querySelector('h1')
// console.log(h1)


// Removing an Element
h1.remove()


// Creating an Element
const div = document.createElement('div')
// console.log(div)


// Giving the Element Content
div.textContent = "Hello Space"

// Appending the Element to another Element
const body = document.querySelector('body')
body.append(div)

// const br = document.createElement('br')
// console.log(br)
// body.append(br)

const h2 = document.createElement('h2')
h2.textContent = 'Hello Class'
div.append(h2)


// Using prepend to add an element to the beginning of another element
// div.prepend(h2)

// Emptying an element out
div.innerHTML = ""



// innerHTML will format any tags included
div.innerHTML = "<h1>Hello World</h1>"

// innerText or textContent will not format the tags
// div.textContent = "<h1>Hello World</h1>"


// Adding and Event Listener
div.addEventListener("click", (event) => {
    // Changing the styling of an Element
    div.style.color = "blue"

    div.style.fontFamily = "Arial"

    console.log('this div has been clicked')
})


const form = document.createElement('form')
const nameInput = document.createElement('input')
const submit = document.createElement('input')

nameInput.type = "text"
nameInput.placeholder = "name"

submit.type = "submit"
submit.value = "Submit Name"
// console.log(nameInput, submit)

form.append(nameInput, submit)
body.append(form)


// Adding an event listener to a Form
form.addEventListener('submit', (event) => {
    // Preventing default behavior using event.preventDefault()
    event.preventDefault()
    // console.log('HEYYYYY')

    // Getting the 'value' from an input
    // console.log(nameInput.value)


    const name = nameInput.value

    const h3 = document.createElement('h3')
    h3.innerText = `Welcome, ${name}`
    body.append(h3)

    form.reset()
})