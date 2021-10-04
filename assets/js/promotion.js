// Countdown
var countDate = new Date('Jan 10, 2023 17:00:00').getTime();

function promotionCount() {
    var now = new Date().getTime();
    gap = countDate - now;

    var giây = 1000;
    var phút = giây * 60;
    var giờ = phút * 60;
    var ngày = giờ * 24;

    var d = Math.floor(gap / (ngày));
    var h = Math.floor((gap % (ngày)) / (giờ));
    var m = Math.floor((gap % (giờ)) / (phút));
    var s = Math.floor((gap % (phút)) / giây);


    document.getElementById("ngày").innerText = d;
    document.getElementById('giờ').innerHTML = h;
    document.getElementById('phút').innerHTML = m;
    document.getElementById('giây').innerHTML = s;

}

window.onload = function () {
    setInterval(function () {
        promotionCount();
    }, 1000)
}