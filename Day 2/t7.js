
var reg = /^[0-9]+$/;
do {
    var radius = prompt("please enter radius");
} while (!reg.test(radius))

alert("Area = " + (Math.PI * Math.pow(radius, 2)));

var reg = /^-[0-9]+$/;
do {
    var radius = prompt("please enter radius");
} while (!reg.test(radius))