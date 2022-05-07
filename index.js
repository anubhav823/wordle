let line1 = document.getElementById('line1')
let line2 = document.getElementById('line2')
let line3 = document.getElementById('line3')
let line4 = document.getElementById('line4')
let line5 = document.getElementById('line5')
let line6 = document.getElementById('line6')

const word = 'TREVOR';

function moveOnMax(field, nextFieldID) {
    console.log("field "+field);
    // console.log("maxLength"+field.maxLength;
    if (field.value.length >= field.maxLength && nextFieldID.value.length === 0) {
        console.log("This "+nextFieldID)
        nextFieldID.focus(); 
    } 
}

function disable(id){
    console.log(id);
    document.getElementById(id).getElementsByClassName('input_box').disabled = true
}

function enable(){

}

function checkIfCharacterIsPresent(s){
    for(let i = 0;i<word.length;i++){
        if(word[i]==s){
            return true;
        }
    }
    return false;
}

function addEventListenerToLine(event){
    let flag = 1;
    console.log(event.currentTarget);
    let line = event.currentTarget;
    let array = [...line.childNodes];
    if(event.code !== 'Enter'){
        for(let i = 0;i< array.length;i++){
            if(i!== array.length-1){
                if (array[i].value.length >= array[i].maxLength && array[i+1].value.length === 0) {
                    array[i+1].focus(); 
                } 
            }
        }
    }
    if (event.code === 'Enter') {
        for (let i = 0; i < array.length; i++) {
            if (array[i].value.length != 1) {
                console.log(array[i].value + " logs")
                alert('found empty space line1')
                break;
            }
            if (array[i].value == word[i]) {
                array[i].style.backgroundColor = 'lightgreen'
            } else if( checkIfCharacterIsPresent(array[i].value)){
                 array[i].style.backgroundColor = 'yellow'
                 flag = 0;
            } else {
                array[i].style.backgroundColor = 'red'
                flag = 0;
            }
        }
        if(flag == 1){
            alert('Done! You got the word')
        }
    }
}
line1.addEventListener("keyup", addEventListenerToLine);
line2.addEventListener("keyup", addEventListenerToLine);
line3.addEventListener("keyup", addEventListenerToLine);
line4.addEventListener("keyup", addEventListenerToLine);
line5.addEventListener("keyup", addEventListenerToLine);
line6.addEventListener("keyup", addEventListenerToLine);



function populateTextBoxes(line) {
    for (let i = 0; i < 6; i++) {
        let input = document.createElement('input');
        input.type = "text";
        input.maxLength = 1;
        input.disabled = false;
        input.classList.add('input_box');
        line.appendChild(input)
    }
}

function enable(){

}
populateTextBoxes(line1)
populateTextBoxes(line2)
populateTextBoxes(line3)
populateTextBoxes(line4)
populateTextBoxes(line5)
populateTextBoxes(line6)