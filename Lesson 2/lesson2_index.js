var divide =function (a,b) {
    if (b===0) {
        return ('Нельзя/0');
    }
    return a/b;
}
alert (divide(5,7));

var action = function (a,b,act) {
    if (act==="+") {
        return a+b;
    }
    if (act==="-") {
        return a-b;
    }
    if (act==="/") {
        return a/b;
    }
    if (act==="*") {
        return a*b;
    }
}
