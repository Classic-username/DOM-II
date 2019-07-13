class Box {
    constructor() {

        this.blocks = document.querySelectorAll('.block')
        this.red = document.querySelector('.block--red')
        this.blue = document.querySelector('.block--blue')
        this.green = document.querySelector('.block--green')
        this.pink = document.querySelector('.block--pink')
        this.gray = document.querySelector('.block--gray')
        this.blockDiv = document.querySelector('.blocks')


    }

    moveToTop(){
        // this.pink.style.
    }
}

let blockPos = document.querySelectorAll('.block')

let blockPosArray = Array.from(blockPos)

console.log(blockPosArray[0].animate([
        {direction: 'normal'},
        {direction: 'reverse'}
    ], 2000)
)


// blockPosArray.forEach((element) => {
//     element.addEventListener(('click'), () => {
//         if(element !== blockPosArray[0]){
//             element.animate([
//                 {direction: normal},
//                 {direction: reverse}
//         ], 2000)
            
//         }
//     })
// })






// ## Objectives
//  * Manipulate the DOM in response to user events using JavaScript
//  * Use event listeners to handle events

// ## Project Description
//  You are going to create a simple game where rockets can be moved up and down by clicking on them.  There are travelers inside of these rockets that can blast off as long as you hold the mouse down on their rocket.

//  Rockets:
//   * When a block is clicked, it should go to the top of the stack.

//  Travelers:
//   * While a mouse is clicked down on a box, it should move to the right (It should coninuously move, there is no limit on how far it will go).
  
