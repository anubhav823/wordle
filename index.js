let line1 = document.getElementById('line1')
let line2 = document.getElementById('line2')
let line3 = document.getElementById('line3')
let line4 = document.getElementById('line4')
let line5 = document.getElementById('line5')
let line6 = document.getElementById('line6')

const lines = [line1, line2, line3, line4, line5, line6]
const word = 'CANDY';

function moveOnMax(field, nextFieldID) {
    if (field.value.length >= field.maxLength && nextFieldID.value.length === 0) {
        nextFieldID.focus();
    }
}

function disablingAllLinesExceptCurrentLine(line) {
    for (let i = 0; i < lines.length; i++) {
        if (lines[i] !== line.id) {
            lines[i].setAttribute('disabled', 'disabled')
        }
    }
}
function checkIsEmpty(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i].value === '' || array[i].value === " ") {
            return true;
        }
    }
    return false;
}
function checkIfCharacterIsPresent(s) {
    for (let i = 0; i < word.length; i++) {
        if (word[i] === s.toUpperCase()) {
            return true;
        }
    }
    return false;
}

function enterOnEmptyRow(line, array) {
    if (checkIsEmpty(array)) {
        line.classList.add('bounce');
        setTimeout(function () {
            line.classList.remove('bounce');
        }, 1000);
    } else if (event.code === 'Enter') {
        return colorChangeOnEnter(array)
    }
}

function colorChangeOnEnter(array) {
    let flag = 1;
    for (let i = 0; i < array.length; i++) {
        if (array[i].value.toUpperCase() === word[i]) {
            array[i].style.backgroundColor = 'lightgreen'
        } else if (checkIfCharacterIsPresent(array[i].value)) {
            array[i].style.backgroundColor = 'yellow'
            flag = 0;
        } else {
            array[i].style.backgroundColor = 'grey'
            flag = 0;
        }
    }
    if (flag === 1) {
        disableAll()
        disableInput()
    }
}

function disableAll() {
    for (let i = 0; i < lines.length; i++) {
        lines[i].removeEventListener('keyup', addEventListenerToLine);
    }
}

function addEventListenerToLine(event) {
    let line = event.currentTarget;
    let flag = 0;
    let array = [...line.childNodes];
    if (event.code !== 'Enter' && event.code !== 'Backspace') {
        changeFocus(array)
    }
    if (event.code === 'Backspace') {
        backspacePressed(event)
    }
    if (event.code === 'Enter') {
        flag = enterOnEmptyRow(line, array)
    }
}
function changeFocus(array) {
    for (let i = 0; i < array.length; i++) {
        if (i !== array.length - 1) {
            if (array[i].value.length >= array[i].maxLength && array[i + 1].value.length === 0 && array[i].value !== " ") {
                array[i + 1].focus();
            }
        }
    }
}

function backspacePressed(event) {
    if (event.target.value === '') {
        if (event.target.previousSibling === null) {
            event.target.focus()
        } else {
            event.target.previousSibling.focus()
        }
    } else {
        event.target.value = '';
        event.target.focus()
    }
}

line1.addEventListener("keyup", addEventListenerToLine);
line2.addEventListener("keyup", addEventListenerToLine);
line3.addEventListener("keyup", addEventListenerToLine);
line4.addEventListener("keyup", addEventListenerToLine);
line5.addEventListener("keyup", addEventListenerToLine);
line6.addEventListener("keyup", addEventListenerToLine);



function populateTextBoxes(line) {
    for (let i = 0; i < 5; i++) {
        let input = document.createElement('input');
        input.type = "text";
        input.maxLength = 1;
        input.disabled = false;
        input.classList.add('input_box');
        line.appendChild(input)
    }
}

function enable() {

}
populateTextBoxes(line1)
populateTextBoxes(line2)
populateTextBoxes(line3)
populateTextBoxes(line4)
populateTextBoxes(line5)
populateTextBoxes(line6)