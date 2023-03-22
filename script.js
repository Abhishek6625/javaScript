let body = document.getElementById("body");

let header = document.createElement("header");
header.style.display = "flex";
header.style.justifyContent = "space-between";
header.style.alignItems = "center";
header.style.background = "lightblue";



let divLogo = document.createElement("div");
// divLogo.style.border = "2px solid orange";
divLogo.style.borderRadius = "50%";

let img = document.createElement("img");
img.setAttribute("src", "https://www.panditprogrammer.com/assests/img/site/logo.png");
img.setAttribute("alt", "img logo");
img.style.height = "50px";

divLogo.setAttribute("class", "logo");
divLogo.append(img);


let navTag = document.createElement("nav");
// navTag.style.border = "2px solid green";


let navText = ["Home", "about", "contact", "help", "service"];

for (let i = 0; i < 5; i++) {
    let a = document.createElement("a");
    a.innerText = navText[i].toLocaleUpperCase();

    a.setAttribute("href", "#");

    a.style.padding = "5px 10px";
    a.style.textDecoration = "none";
    a.style.marginLeft = "5px";
    a.style.color = "black";
    a.style.borderRadius = "5px";
    // a.style.textTransform = "capitalize";
    a.setAttribute("id", `link${i}`)

    navTag.append(a);

}

body.append(header);
header.append(divLogo);
header.append(navTag);


let allLinks = document.getElementsByTagName("a");
// console.log(allLinks);

for (let i = 0; i < allLinks.length; i++) {
    allLinks[i].addEventListener("mouseover", () => {
        allLinks[i].style.background = "green";
        allLinks[i].style.color = "white";

    })
    allLinks[i].addEventListener("mouseout", () => {
        allLinks[i].style.background = "inherit";
        allLinks[i].style.color = "inherit";

    })
    allLinks[i].addEventListener("click", (e) => {
        if (e.target.id == `link${i}`)
            e.target.classList.add("active");
    })

}
