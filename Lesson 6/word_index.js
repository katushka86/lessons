var getN=function (words) {
    var count=0;
    for (var i=0; i<words.length; i++) {
        if (words[i]===' ') {
            count++;
        }
    }
    return count+1;
}
alert (getN('мама мыла раму'));