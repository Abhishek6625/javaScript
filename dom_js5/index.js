let body= document.querySelector('body');
let h1=document.createElement('h1')
let text =document.createTextNode('Abhishek')
let comment=document.createComment('this is my textNode')
let p =document.createElement('p');
let para=document.createTextNode("Hello world, i am abhishek kumar form bihar")
h1.appendChild(text);
body.appendChild(h1);
body.appendChild(comment);
h1.style.color="#fff";
h1.style.backgroundColor='#111'
h1.style.textAlign='center'
h1.style.padding='10px'
body.appendChild(p);
p.appendChild(para);
p.style.fontSize='20px'
p.style.textAlign='center'

// let a=document.createAttribute('class="text"')

// p.appendChild(a);


// console.log(text);
// console.log(h1);
// console.log(comment);
console.log(p);