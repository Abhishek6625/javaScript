let body =document.getElementById('body');
let button =document.querySelector('button');
let sm =document.querySelectorAll('.sm')[0];
let sm1 =document.querySelectorAll('.sm')[1];
let l=document.querySelectorAll('i')[0];
let d=document.querySelectorAll('i')[1];
sm.classList.toggle('active');

l.addEventListener('click',()=>{
    body.style.background='white';
    button.style.background='white';
    button.style.color='black';
})

d.addEventListener('click',()=>{
    body.style.background='black';
    button.style.background='black';
    button.style.color='white';
})


