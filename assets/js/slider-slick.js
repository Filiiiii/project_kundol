//sticky Slider
$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: true,
    centerMode: true,
    focusOnSelect: true
});


//   Zoom
const container = document.getElementById('productZoom')
const img = document.querySelectorAll('.zoom')

container.addEventListener('mousemove', (e) => {
    const x = e.clientX - e.target.offsetLeft
    const y = e.clientY - e.target.offsetTop

    console.log(x, y)
    for (var i = 0; i < img.length; i++) {
        img[i].style.transformOrigin = `${x}px ${y}px`
        img[i].style.transform = 'scale(2)'
    }
});

container.addEventListener('mouseleave', (e) => {
    for (var i = 0; i < img.length; i++) {
        img[i].style.transform = " scale(1)"
    }
});


// Plus & Minus Button
window.onload = function () {
    var minusBtn = document.getElementById("minus"),
        plusBtn = document.getElementById("plus"),
        numberPlace = document.getElementById("quantity"),
        number = parseInt(document.getElementById("quantity").value),
        min = 0, /// min number
        max = 50; /// max number


    minusBtn.onclick = function () {
        if (number > min) {
            number = number - 1; /// Minus 1 of the number
            numberPlace.value = number; /// Display the value in place of the number
        }
    }
    plusBtn.onclick = function () {
        if (number < max) {
            number = number + 1;
            numberPlace.value = number; /// Display the value in place of the number
        }
    }
}


// window.onload = function () {
//     const minusBtn = document.querySelectorAll("#minus"),
//         plusBtn = document.querySelectorAll("#plus"),
//         numberPlace = document.querySelectorAll(".quantity"),
//         // number = parseInt(document.querySelectorAll(".quantity").value),
//         min = 0, /// min number
//         max = 50; /// max number


//     for (var i = 0; i < minusBtn.length; i++){
//         minusBtn[i].onclick = function () {
//             for (var j = 0; j < numberPlace.length; j++){
//                 var number = parseInt(numberPlace[j].value);
//                 if (number > min) {
//                     number = number - 1; 
//                     numberPlace[j].value = number; /// Display the value in place of the number
//                 }
//             }
//         }
//     }
//     for (var i = 0; i < plusBtn.length; i++){
//         plusBtn[i].onclick = function () {
//             for (var j = 0; j < numberPlace.length; j++){
//                 var number = parseInt(numberPlace[j].value);
//                 if (number < max) {
//                     number = number + 1; 
//                     numberPlace[j].value = number; /// Display the value in place of the number
//                 }
//             }
//         }
//     }
// }