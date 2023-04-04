let a =document.querySelector("section h2");
a.style.backgroundColor="blue";
console.log(a);
let h3 =document.createElement("h3");
let text =document.createTextNode("This is my text")
let comment =document.createComment("Thia is my comment")

// console.log(box);
box.forEach((columns) =>{
  
    let box =document.querySelector(".box_one");
    console.log(columns)
    box.appendChild(h3)
})

// console.log(h3);
// console.log(text);
// console.log(comment);

// h3.appendChild(text);
// box.appendChild(h3)