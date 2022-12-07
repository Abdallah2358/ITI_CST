var timerID
var imgs = document.getElementsByTagName('img');
var crt = 0;
imgs[crt].src = "images/marbels/marble3.jpg"

function move() {

    timerID = setInterval(function () {
        if (crt == 5) {
            crt = 0;
            imgs[crt].src = "images/marbels/marble3.jpg"
            imgs[5].src = "images/marbels/marble1.jpg"
        } else {
            imgs[crt + 1].src = "images/marbels/marble3.jpg"
            imgs[crt++].src = "images/marbels/marble1.jpg"
        }

    }, 1000)
}
move()
function stop(e) {
    clearInterval(timerID);
    imgs[crt].src = "images/marbels/marble1.jpg"
    e.src = "images/marbels/marble3.jpg";
}
function cont(e) {
    e.src = "images/marbels/marble1.jpg";
    crt = 0;
    imgs[crt].src = "images/marbels/marble3.jpg"
    move()
}
