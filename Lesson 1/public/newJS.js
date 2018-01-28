var input=document.querySelector('input');
var button=document.querySelectorAll('button');
var action;
var oldValue;
for (var i=0; i<button.length; i++) {
    button[i].onclick = function () {
        input.value += this.innerText;

    }
}
