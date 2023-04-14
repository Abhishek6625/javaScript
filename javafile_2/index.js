let body = document.getElementById("body");
let header = document.createElement("header");
let h1 = document.createElement("h1");
let nav = document.createElement("nav");


header.style.backgroundColor = 'black';
header.style.color = 'white';
header.style.padding = '8px';
header.style.display = 'flex';
header.style.justifyContent = "space-between";
header.style.alignItems = "center";
h1.innerText = "Abhi";
h1.style.padding = '8px';
h1.style.background = 'white';
h1.style.color = 'blue'
h1.style.marginLeft = '40px'
h1.style.borderRadius = '50%'

let navText = ['Home', 'About', 'Service', 'Help Us', 'Blogs'];
for (let i = 0; i < navText.length; i++) {
    let a = document.createElement('a');
    a.innerText = navText[i];
    a.setAttribute = ("href", "#");
    a.style.marginRight = '20px';
    a.style.padding = '8px';
    a.style.background = 'white'
    a.style.color = 'blue';
    a.style.borderRadius = '10px'



    nav.append(a);
}





body.append(header);
header.append(h1);
header.append(nav);


let all_link = document.getElementsByTagName('a');

for (let i = 0; i < all_link.length; i++) {
    all_link[i].addEventListener('mouseover', function () {
        all_link[i].style.backgroundColor = 'black';
        all_link[i].style.color = 'White';
        all_link[i].style.cursor='pointer'
    })
    all_link[i].addEventListener('mouseout', function () {
        all_link[i].style.backgroundColor = 'white';
        all_link[i].style.color = 'black';
    })
}

