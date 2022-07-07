let inputValueOne = document.getElementById("input-one");
let inputValueTwo = document.getElementById("input-two");
let inputValueThree = document.getElementById("input-three");
let selectValueOne = document.getElementById("select-one");
let minNumber, timerId;

function calcular() {
    if ((inputValueOne.value && inputValueTwo.value) != 0 && (inputValueThree.value != 0 || inputValueThree.value == 0)) {
        if (inputValueThree.value == 0) {
            minNumber = Math.min(inputValueOne.value, inputValueTwo.value);
            if (selectValueOne.options[selectValueOne.selectedIndex].value != 0) {
                document.getElementById("valueInput").innerHTML = sumar(minNumber);
            }
        }
        else {
            minNumber = Math.min(inputValueOne.value, inputValueTwo.value, inputValueThree.value);
            if (selectValueOne.options[selectValueOne.selectedIndex].value != 0) {
                document.getElementById("valueInput").innerHTML = sumar(minNumber);
            }
        }
    }
}

function sumar(minNumber) {
    if (inputValueThree.value == 0) {
        if (minNumber == inputValueOne.value) {
            return Number(inputValueTwo.value) + Math.floor(minNumber * selectValueOne.options[selectValueOne.selectedIndex].value) / 100;
        }
        else if (minNumber == inputValueTwo.value) {
            return Number(inputValueOne.value) + Math.floor(minNumber * selectValueOne.options[selectValueOne.selectedIndex].value) / 100;
        }
    }
    else {
        if (minNumber == inputValueOne.value) {
            return Number(inputValueTwo.value) + Number(inputValueThree.value) + Math.floor(minNumber * selectValueOne.options[selectValueOne.selectedIndex].value) / 100;
        }
        else if (minNumber == inputValueTwo.value) {
            return Number(inputValueOne.value) + Number(inputValueThree.value) + Math.floor(minNumber * selectValueOne.options[selectValueOne.selectedIndex].value) / 100;
        }
        else if (minNumber == inputValueThree.value) {
            return Number(inputValueOne.value) + Number(inputValueTwo.value) + Math.floor(minNumber * selectValueOne.options[selectValueOne.selectedIndex].value) / 100;
        }
    }
}

function limpiarCampos() {
    inputValueOne.value = "";
    inputValueTwo.value = "";
    inputValueThree.value = "";
    selectValueOne.selectedIndex = 0;
    document.getElementById("valueInput").innerHTML = "";
}