var str = prompt("please enter a string");
var letter = prompt("please enter a character");
var isCaseSensitive = confirm("Case Sensitive ?");
var reg = new RegExp(letter, isCaseSensitive ? '' : 'i');
var count = 0;
for (let i = 0; i < str.length; i++) {
    if (reg.test(str.charAt(i))) {
        count++;
    }
}
document.write("<h1>Count = ", count, "</h1>");