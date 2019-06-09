// Your code goes here
const logo = document.querySelector('.logo-heading')
const aClass = document.querySelectorAll('.nav-link');
const welcomeDiv = document.querySelector('.intro')
const welcomeImg = document.querySelector('img')
const welcome = document.querySelector('.intro h2')
const letsAGo = document.querySelector('.text-content h2')
const weLikeH2 = document.querySelector('.inverse-content h2')
const contentPick = document.querySelector('.content-pick')
const secondImg = document.querySelector('.img-content')



// console.log()

window.addEventListener('scroll', () => {
    contentPick.style.transition = '5s'
    contentPick.style.color = 'red'
})

const clickColor = function(){
    this.style.color = 'cyan'
}

logo.addEventListener('dblclick', () => {
    logo.style.display = 'none'
})

aClass.forEach((obj) => {
    obj.addEventListener('click', clickColor)
})

aClass.forEach((obj) => {
    obj.addEventListener('click', (e) => {
        e.preventDefault()
    })
})


welcomeDiv.addEventListener('auxclick', (e) => {
    e.target.style.background = 'maroon'
    welcomeImg.style.display = 'none'
})

welcome.addEventListener('auxclick', (e) => {
    welcomeImg.style.display = 'inherit'
    e.stopPropagation()
    e.target.style.background = 'green'
})

letsAGo.addEventListener('copy', (e) => {
    alert('YOU COPIED THE HIGHLITED SELECTION')
})

weLikeH2.addEventListener('mouseover', (e) => {
    e.target.style.transition = '2s'
    e.target.style.fontSize = '5rem'
})

contentPick.addEventListener('paste', (e) => {
    e.target.style.transition = '2s'
    e.target.style.background = '#306d82'
})

secondImg.addEventListener('drag', (e) => {
    e.target.style.display = 'none'
})

secondImg.addEventListener('wheel', (e) => {
    alert("YOU JUST WHEELED")
})

letsAGo.addEventListener('cut', (e) => {
    alert('YOU CUT THE SELECTED TEXT')
})

// aClass[0].addEventListener('click', clickColor)

// aClass.forEach((obj) => {
//     obj[i].addEventListener('click', () => {
//         aClass[i].style.color = 'red'
//     })
// })








