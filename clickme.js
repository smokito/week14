const input = document.querySelector('#username')
const div = document.querySelector('#greeting')


function greetPerson(){ 
const name = input.value
const title = document.createElement('h1')
title.innerHTML = `Welcome to our Page ${name}`
div.append(title)
title.style.color ='#757575'
input.value = '';
}
function chageColor() {
    document.body.style.background = "#eae7df"
}

    