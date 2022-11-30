
var reg = /^[0-9]+.?[0-9]*$/;
do {
    var radius = prompt("please enter radius");
} while (!reg.test(radius))

alert("Area of circle = " + (Math.PI * Math.pow(parseFloat(radius), 2)));


do {
    var num = prompt("what is the value you want to calculate its square root ?");
} while (!reg.test(num))

alert("Square root of   " + num + " is " + Math.pow(parseFloat(num), 2));



do {
    var rad = prompt("what is the angle you want to calculate cosine to ?");
} while (!reg.test(rad));

document.write("<h1>Cosine " + rad + "° = " + Math.cos(parseInt(rad) * Math.PI / 180).toFixed(2) + "</h1>");



