let body = document.getElementById("body");

// main.style.background ="red";

// create tag 
let h1 = document.createElement("h1");
let para1 = document.createElement("p");
let input = document.createElement("input");


// write text inside tag 
para1.innerText = "this is paragraph.";
h1.innerText = "Hello ";



// add class or id 
h1.classList.add("firsth1");

// set attribute in html tags 
h1.setAttribute("id","test")
input.setAttribute("type","text");
input.setAttribute("placeholder","Enter your name");


// add css 
h1.style.textAlign = "center";






// insert into tag 
body.append(h1);
body.append(para1);
body.append(input);
