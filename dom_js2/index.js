// let a=document.querySelector(".contener h1");
// a.innerHTML="Abhishek kumar"
// a.style.border='2px solid blue';
// a.style.textAlign="center";
// a.style.padding="20px"
// a.style.backgroundColor="green"
// a.style.color ="white"
// a.style.letterSpacing="4px"

// console.log(a);

// let b =document.querySelectorAll(".form_control input");
// b.forEach(function(data){
//     data.style.backgroundColor="black";
//     data.style.color="white";
// })

// console.log(b);


//  let d =document.querySelector(".form_control input").classList;
// d.add("form_control1");
// console.log(d);



//  let d =document.querySelector(".form_control label").classList;
//  d.replace("form_control","form2");
//  console.log(d);



// const  changeColor=function(){
//     let a=document.querySelector(".form_control").classList;
//     a.toggle("demo1");
//     console.log(a);
// }


let x =document.querySelector(".link");
// x.style.border="2px solid red";
x.style.padding="8px 15px";
x.style.backgroundColor ="black";
x.style.color="white";
x.style.textDecoration="none";
x.style.borderRadius="10px";

console.log(x);


// let a = document.querySelector(".Apply_box");
// const changeBackground = () => {
//     a.style.backgroundColor = "blue";
//     a.style.color = "white";
// }



// let y =document.querySelector(".Apply_box");
// let btn =document.querySelector("form a")
// const changeBackground = () => {
//     y.style.backgroundColor = "green";
//     y.style.color = "white";
// }  
// btn.onclick =changeBackground;
// btn.addEventListener('click',changeBackground);


let y =document.querySelector(".Apply_box");
let a =document.querySelector("h1");
let b =document.querySelector("label");
let c =document.querySelector(".Apply_box")
let btn =document.querySelectorAll("form a")[0];
let btn1 =document.querySelectorAll("form a")[1];

const changeBackground = () => {
    y.style.backgroundColor = "green";
    y.style.color = "white";
}
const changeTextcolor = () => {
    a.style.backgroundColor = "black";
    a.style.color = "white";
    a.style.padding='10px';
    a.style.textAlign='center';
}  
const changeTextBold = () => {
    b.style.color = "red";
    b.style.fontSize="20px";
} 
const changeRemove = () => {
    c.style.backgroundColor = "white";
    
}  

btn.addEventListener('click',changeBackground);
btn.addEventListener('click',changeTextcolor);
btn.addEventListener('click',changeTextBold);
btn1.addEventListener('click',changeRemove);