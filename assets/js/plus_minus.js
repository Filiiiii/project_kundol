// Plus & Minus Button
console.log(typeof parseInt(document.getElementById('item-price1').innerHTML));
window.onload = function () {
    var minusBtn = document.getElementById("minus"),
        plusBtn = document.getElementById("plus"),
        numberPlace = document.getElementById("quantity"),
        number = parseInt(document.getElementById("quantity").value),
        itemPrice1 = parseInt(document.getElementById('item-price1').innerHTML),
        itemtotal1 = document.getElementById('item-total1'),
        min = 0, /// min number
        max = 50; /// max number



    minusBtn.onclick = function () {
        if (number > min) {
            number = number - 1; /// Minus 1 of the number
            numberPlace.value = number; /// Display the value in place of the number
            itemtotal1.innerHTML = number * itemPrice1
        }
    }
    plusBtn.onclick = function () {
        if (number < max) {
            number = number + 1;
            numberPlace.value = number; /// Display the value in place of the number
            itemtotal1.innerHTML = number * itemPrice1
        }
    }

    var minusBtn2 = document.getElementById("minus2"),
        plusBtn2 = document.getElementById("plus2"),
        numberPlace2 = document.getElementById("quantity2"),
        number2 = parseInt(document.getElementById("quantity2").value),
        itemPrice2 = parseInt(document.getElementById('item-price2').innerHTML),
        itemtotal2 = document.getElementById('item-total2'),
        min = 0, /// min number
        max = 50; /// max number

    console.log(number2);

    minusBtn2.onclick = function () {
        if (number2 > min) {
            number2 = number2 - 1; /// Minus 1 of the number
            numberPlace2.value = number2; /// Display the value in place of the number
            itemtotal2.innerHTML = number * itemPrice2
        }
    }
    plusBtn2.onclick = function () {
        if (number2 < max) {
            number2 = number2 + 1;
            numberPlace2.value = number2; /// Display the value in place of the number
            itemtotal2.innerHTML = number2 * itemPrice2
        }
    }

    var minusBtn3 = document.getElementById("minus3"),
        plusBtn3 = document.getElementById("plus3"),
        numberPlace3 = document.getElementById("quantity3"),
        number3 = parseInt(document.getElementById("quantity3").value),
        itemPrice3 = parseInt(document.getElementById('item-price3').innerHTML),
        itemtotal3 = document.getElementById('item-total3'),
        min = 0, /// min number
        max = 50; /// max number

    console.log(number3);

    minusBtn3.onclick = function () {
        if (number3 > min) {
            number3 = number3 - 1; /// Minus 1 of the number
            numberPlace3.value = number3; /// Display the value in place of the number
            itemtotal3.innerHTML = number3 * itemPrice3
        }
    }
    plusBtn3.onclick = function () {
        if (number3 < max) {
            number3 = number3 + 1;
            numberPlace3.value = number3; /// Display the value in place of the number
            itemtotal3.innerHTML = number3 * itemPrice3
        }
    }
}