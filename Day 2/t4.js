// Name
var reg = /[^a-zA-Z]/;
do {
    var name1 = prompt("Please enter your Name");
    var isInvalid = reg.test(name1);
    if (isInvalid)
        alert("Please only use charters");
} while (isInvalid);

// Phone
reg = /^[\d]{8}$/;
do {
    var phone = prompt("Please enter your Phone Number");
    var isValid = reg.test(phone);
    if (!isValid)
        alert("Please only use numbers and only 8 numbers");
} while (!isValid);

// Mobile
reg = /^(010|011|012|015)[\d]{8}$/
do {
    var mobile = prompt("Please enter your Mobile Number");
    var isValid = reg.test(mobile);
    if (!isValid)
        alert("Please only use : \nNumbers  \n11 numbers \nStarts With 010, 011,012 or 015");
} while (!isValid);

// Email
reg = /^[a-zA-Z][a-zA-z0-9]*@[a-zA-z0-9]+(.[a-zA-Z]+)$/
do {
    var email = prompt("Please enter your Email");
    var isValid = reg.test(email);
    if (!isValid)
        alert("please use this format [ email@example.com ]");
} while (!isValid);


var clrArr = ['red', 'green', 'blue']
var clr = ''
do {
    clr = prompt("Chose display color from red, green or blue");
    isValid = clrArr.includes(clr);
    if (!isValid)
        alert("please choose a color from  red, green or blue")
} while (!isValid);




document.write('<h1><span style="color : ' + clr + ' ">Welcome Dear guest</span> ' + name1 + ' </h1>')
document.write('<h1><span style="color : ' + clr + ' ">Your Telephone is</span> ' + phone + ' </h1>')
document.write('<h1><span style="color : ' + clr + ' ">Your Mobile is</span> ' + mobile + ' </h1>')
document.write('<h1><span style="color : ' + clr + ' ">Your Email</span> ' + email + ' </h1>')