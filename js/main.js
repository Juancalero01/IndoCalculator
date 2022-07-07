let inputValueOne = document.getElementById("input-one");
let inputValueTwo = document.getElementById("input-two");
let inputValueThree = document.getElementById("input-three");
let selectValueOne = document.getElementById("select-one");
let span = document.getElementsByClassName("close")[0];
let modal = document.getElementById("modal");
let price = document.getElementById("priceop");
let minNumber;

function getDetail() {
    if ((inputValueOne.value && inputValueTwo.value) != 0 && (inputValueThree.value != 0 || inputValueThree.value == 0)) {
        if (inputValueThree.value == 0) {
            minNumber = Math.min(inputValueOne.value, inputValueTwo.value);
            if (selectValueOne.options[selectValueOne.selectedIndex].value != 0) {
                modal.style.display = "block";
                price.style.display = "none";
                document.getElementById("priceOne").innerHTML = inputValueOne.value;
                document.getElementById("priceTwo").innerHTML = inputValueTwo.value;
                document.getElementById("desc").innerHTML = selectValueOne.options[selectValueOne.selectedIndex].value + "%";
                document.getElementById("pricemin").innerHTML = minNumber;
                document.getElementById("pricemindesc").innerHTML = Math.floor(minNumber * selectValueOne.options[selectValueOne.selectedIndex].value) / 100;
                document.getElementById("subtotal").innerHTML = getSubtotal();
                document.getElementById("total").innerHTML = getTotal(minNumber);
            }
        }
        else {
            minNumber = Math.min(inputValueOne.value, inputValueTwo.value, inputValueThree.value);
            if (selectValueOne.options[selectValueOne.selectedIndex].value != 0) {
                modal.style.display = "block";
                price.style.display = "";
                document.getElementById("priceOne").innerHTML = inputValueOne.value;
                document.getElementById("priceTwo").innerHTML = inputValueTwo.value;
                document.getElementById("priceThree").innerHTML = inputValueThree.value;
                document.getElementById("desc").innerHTML = selectValueOne.options[selectValueOne.selectedIndex].value + "%";
                document.getElementById("pricemin").innerHTML = minNumber;
                document.getElementById("pricemindesc").innerHTML = Math.floor(minNumber * selectValueOne.options[selectValueOne.selectedIndex].value) / 100;
                document.getElementById("subtotal").innerHTML = getSubtotal();
                document.getElementById("total").innerHTML = getTotal(minNumber);
            }
        }
    }
}

function getTotal(minNumber) {
    if (inputValueThree.value == 0) {
        if (minNumber == inputValueOne.value) {
            return (minNumber - Math.floor(minNumber * selectValueOne.options[selectValueOne.selectedIndex].value) / 100) + Number(inputValueTwo.value);
        }
        else if (minNumber == inputValueTwo.value) {
            return (minNumber - Math.floor(minNumber * selectValueOne.options[selectValueOne.selectedIndex].value) / 100) + Number(inputValueOne.value);
        }
    }
    else {
        if (minNumber == inputValueOne.value) {
            return (minNumber - Math.floor(minNumber * selectValueOne.options[selectValueOne.selectedIndex].value) / 100) + (Number(inputValueTwo.value) + Number(inputValueThree.value));
        }
        else if (minNumber == inputValueTwo.value) {
            return (minNumber - Math.floor(minNumber * selectValueOne.options[selectValueOne.selectedIndex].value) / 100) + (Number(inputValueOne.value) + Number(inputValueThree.value));
        }
        else if (minNumber == inputValueThree.value) {
            return (minNumber - Math.floor(minNumber * selectValueOne.options[selectValueOne.selectedIndex].value) / 100) + (Number(inputValueOne.value) + Number(inputValueTwo.value));
        }
    }
}

function getSubtotal() {
    return Number(inputValueOne.value) + Number(inputValueTwo.value) + Number(inputValueThree.value);
}

function clearFields() {
    inputValueOne.value = "";
    inputValueTwo.value = "";
    inputValueThree.value = "";
    selectValueOne.selectedIndex = 0;
    document.getElementById("valueInput").innerHTML = "";
}

function closeModal() {
    modal.style.display = "none";
}


window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}