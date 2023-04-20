let body =document.querySelector('body');
let h1 =document.querySelector('h1');
let icon =document.querySelectorAll('i');
let dark=document.getElementById('toggleDark');
let light=document.getElementById('toggleLight');


body.style.margin='0px';
body.style.padding='0px'
body.style.boxSizing='border-box';

h1.style.fontSize='2rem';
h1.style.textAlign='center';
h1.style.marginTop='40px';

icon[1].style.display='none';

icon.forEach(function(i){
    i.style.fontSize='50px';
    i.style.cursor='pointer';
    i.style.position='absolute';
    i.style.top='50%';
    i.style.left='50%';
    i.style.transform='translate(-50%,-50%)';
    i.style.border='4px solid black';
    i.style.padding='10px'
    i.style.borderRadius='50%'
})



dark.addEventListener('click',()=>{

        icon[0].style.display='none';
        icon[1].style.display='block'
        body.style.background='black';
        body.style.color='white';
        body.style.transition='1s';
        icon[0].style.border='4px solid black';
       
})

light.addEventListener('click',()=>{

    icon[1].style.display='none';
    icon[0].style.display='block';
    body.style.background='white';
    body.style.color='black';
    body.style.transition='1s';
    icon[1].style.border='4px solid white';
})