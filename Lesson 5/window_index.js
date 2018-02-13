var btn1=document.querySelector('.btn');
btn1.onclick=function () {
layer1.classList.add('active');
}
var layer1=document.querySelector('.modal-container');
var  cross1=document.querySelector('.x');
cross1.onclick=function () {
    layer1.classList.remove('active');
}
var layer2=document.querySelector('.layer');
layer2.onclick=function () {
    layer1.classList.remove('active');
}