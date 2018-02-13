// document.querySelector('.some-text');
// console.log(document.querySelector('.some-text'));
// var nodeElem=document.querySelector('.some-text');
// console.log(nodeElem);
// nodeElem.innerText='любой текст';
// nodeElem.classList.add('new-class');
// nodeElem.onclick=function () {
//     nodeElem.classList.add('active');
// }
var nodeElem=document.querySelector('.link1');
nodeElem.innerText='Главная';
nodeElem.onclick=function () {
    nodeElem.classList.add('active');
    nodeElem2.classList.remove('active');
    nodeText.innerText="вы кликнули на 1 ссылку";
}
var nodeElem2=document.querySelector('.link2');
nodeElem2.innerText='О нас';
nodeElem2.onclick=function () {
    nodeElem2.classList.add('active');
    nodeElem.classList.remove('active');
    nodeText.innerText="вы кликнули на 2 ссылку";
}
var nodeText=document.querySelector('.text');

