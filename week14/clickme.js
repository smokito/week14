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

 function changePicture(){
    let treeImage = document.querySelector('.img-tree')
    let journeyImage = document.querySelector('.img-journey')
    let starImage = document.querySelector('.img-star')
    treeImage.src = './assets/river.jpg'
    journeyImage.src ='./assets/tree.jpg'
    starImage.src = './assets/journey.jpg';
    
 }