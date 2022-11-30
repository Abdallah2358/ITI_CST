var win;
console.log("x", outerWidth);
console.log("y", outerHeight);
var timerID;
var x = 1, y = 1;
function fly(params) {
    win = open("child.html", "", "width=200,height=150")
    timerID = setInterval(function () {

        win.moveBy(x, y)

        if (win.screenTop == (outerHeight - win.outerHeight)) {
            x = -1
            y = -1
        }
        if (win.screenLeft == 0) {
            x = 1;
            y = 1;
        }

    }, 5);



}
function stopFlying() {
    clearInterval(timerID);
    win.focus();
}
function myType() {
    var str = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum eligendi neque, fugiat non corrupti voluptas molestiae quo tempore in quam nisi dolore nostrum quibusdam officia illo provident porro optio repellendus facere obcaecati sed atque, minus ut placeat? Autem ratione aut, totam eum, cum reiciendis perferendis dolorem suscipit rem veniam itaque."
    win = open("child.html", "", "width=500,height=300");
    var i = 0;
    var t = setInterval(function () {
        win.document.write(str.charAt(i++));
        if (i == str.length) {
            clearInterval(t);
            win.close()
        }
    }, 20);
}

function myScroll() {
    win = open("scroll.html", "", "width=500,height=300");
    setInterval(function () {
        win.scrollBy({
            top: 1,

        });
    }, 5)
}