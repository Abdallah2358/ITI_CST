var str = prompt("please enter a string");
var strArr = str.split(' ');
var maxStr = '';
//document.write("<h1>", str.split(" "), "</h1>");

for (let i = 0; i < strArr.length; i++) {
    if (strArr[i].length > maxStr.length) {
        maxStr = strArr[i];
    }
}
document.write("<h1> Largest string is ", maxStr, "</h1>");

