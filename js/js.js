'use strict';

let settings = {
    input: document.querySelector('#number'),

}
let user = {

}
let game = {
    settings,
    user,
    inputEnter(event){
        if(event.keyCode === 13) {
            event.preventDefault();
            let numCells = document.querySelector('#number');
            console.log(typeof numCells);
            numCells.value=Number(numCells.value)+10;
        }
    },
run(){
        this.settings.input.addEventListener('keydown', this.inputEnter);
},

}
game.run();
// console.log(settings.numCells.value);