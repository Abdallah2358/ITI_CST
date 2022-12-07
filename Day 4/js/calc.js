var ans = document.getElementById('ans');
var hasPoint = false;
var hasOp = true;
var hasRes = false;
console.log([].shift() ? 't' : 'f');
function EnterNumber(num) {
    hasOp = false;
    if (hasRes) {
        EnterClear();
    }
    if (num != '.') {
        ans.value += num

    } else {
        if (!hasPoint) {
            ans.value += num
            hasPoint = true
        }
    }
}

function EnterOperator(op) {
    if (!hasOp) {
        ans.value += op
        hasOp = true
        hasPoint = false;
    }
}

function EnterClear() {
    hasRes = false;
    ans.value = ''
}
function EnterEqual() {
    hasRes = true;

    var opArr = ans.value.match(/[+*\/\-]/g)
    var numArr = ans.value.split(/[+*\/\-]/)
    if (!hasOp) {

        ans.value = easyCalc(opArr, numArr);

    }

}
function easyCalc(opArr, numArr) {

    var res = Number(numArr.shift());
    for (const iterator of opArr) {
        var right = Number(numArr.shift());

        res = calc(res, right, iterator)
    }
    return res
}

function calcExp(opArr, numArr) {
    var res;
    var left = Number(numArr.shift());
    console.log(left);
    var op = opArr.shift();
    if (!left) {
        console.log("out");
        return 0;
    }

    if (op == '/' || op == '*') {

        console.log("times");
        var right = Number(numArr.shift());
        res = calc(left, right, op)
    } else {
        console.log("add");
        right = calcExp(opArr, numArr)
        console.log('Return of rec', right);
        res = calc(left, right, op)
    }
    return res;

}
function calc(left, right, op) {
    let res;
    console.log('left ', left);
    console.log('right ', right);
    switch (op) {
        case '+':

            res = left + right;
            break;
        case '-':
            res = left - right;
            break;
        case '*':
            res = left * right;
            break;
        case '/':
            res = left / right;
            break;
    }

    return res;
}