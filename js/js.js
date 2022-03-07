'use strict';

let settings = {
    input: document.querySelector('#number'),

}
let user = {

}
let game = {
    settings,
    user,
    inputEnter(){
        let numCells =document.querySelector('#number').value;
        console.log(numCells);
    },
run(){
        this.settings.input.addEventListener('keydown', this.inputEnter);
},

}
game.run();
// console.log(settings.numCells.value);