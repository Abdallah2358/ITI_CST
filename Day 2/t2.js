var str = prompt("please enter a string");
var isCaseSensitive = confirm("Case Sensitive ?");
var isPalindrome = true;

for (let i = 0; i < (str.length / 2); i++) {
    var reg = new RegExp(str.charAt(i), isCaseSensitive ? '' : 'i');
    if (!(reg.test(str.charAt(str.length - i - 1)))) {
        // document.write(i, str.charAt(i), "  ", str.length - i, str.charAt(str.length - i - 1), "<br>");
        isPalindrome = false;
    }
}
var text = isPalindrome ? "Palindrome Text" : "Not Palindrome Text"

document.write("<h1>", text, "</h1>");