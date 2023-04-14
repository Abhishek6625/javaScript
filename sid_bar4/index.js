// let doc=document.all;
// console.log(doc);

// let a=document.querySelector(".nav-bar");
// let b=document.querySelector(".nav_item");
// let b=document.querySelector(".bx.icon");
// let c=b.classList[0];
// c.length
// console.log(c);
// console.log(c.length);


// let d=document.querySelectorAll("a");
//  let e=d.length
// let d=document.querySelectorAll("a")[2];
// let d=document.querySelectorAll(".icon_item");
// let e =d.length;
// console.log(e);
// console.log(d);


// let g = document.querySelector(".header").innerText;
// let g = document.querySelector(".header").innerHTML;
// let g = document.querySelector("nav").getAttribute('class');
// let g = document.querySelector("nav").getAttributeNode('class');
// let g = document.querySelector("nav").attributes;
// let g = document.querySelector("i").attributes[0].value;
// let g = document.querySelector("i").attributes['class'].value;
// let g = document.querySelectorAll(".icon_item a")[0].attributes['href'];
// console.log(g);




// let h1 =document.querySelector("h1");
// h1.innerText="Abhishek kumar"
// console.log(h1);
// let a =document.querySelectorAll(".icon_item a")[6];
// a.innerText="Sonali";
// a.setAttribute('href','htpps://www.google.com');
// a.setAttribute('id','item1');

// let a =document.querySelector(".icon_item a");
// let b=a.attributes[0].name;
// console.log(a)
// let a =document.querySelector(".icon_item");
// a.removeAttribute('class')
// console.log(a)


// let h=document.querySelectorAll(".icon_item");
// h[1].style.backgroundColor='red';
// h[6].style.backgroundColor='red';
// console.log(h);


// let h=document.querySelectorAll(".icon_item ");
// h.forEach(function(data){
//   data.style.backgroundColor= 'green';
// })

// console.log(h);

// let a=document.querySelector('h1');
// let b=a.className;
// let b=a.className ='header';
// console.log(a);
// console.log(b);

// let a=document.querySelector('.icon_item').classList;
// console.log(a[1]);
// console.log(a.item(1))
// let a=document.querySelector('nav').classList;
// a.add("nav_demo",'demo');
// a.remove('nav_demo','demo')




let icon = document.querySelector('.bx-chevron-right');
let nav = document.querySelector('.nav-bar');
let a = document.querySelectorAll('a');
let input = document.querySelector('input');
let h1 = document.querySelector('h1');
let h4 = document.querySelector('h4');
let i = document.querySelectorAll('i');
let serchIcon = document.querySelectorAll('i')[1];
let serchBar = document.querySelector('.search-bar');



const navgestion = () => {

    if (nav.style.width == "80px") {

        nav.style.width = "300px";
        nav.style.transition = '.5s';
        a.forEach(function (data) {
            data.style.display = 'inline-block';
        })
        input.style.display = 'inline-block';
        h1.style.display = 'block';
        h4.style.display = 'block';
        serchIcon.style.display = 'block';
        // serchBar.style.backgroundColor = 'transparent';
        serchBar.style.cursor = 'auto';
        serchBar.style.height = '48px';
        serchBar.style.padding = '0px';

        i.forEach(function (data) {
            data.style.fontSize = '25px';
            data.style.fontWeight = '700';
            data.style.marginLeft = '10px';

        })

    } else {

        nav.style.width = "80px";
        nav.style.transition = '.5s';
        a.forEach(function (data) {
            data.style.display = 'none';
        })
        input.style.display = 'none';
        h1.style.display = 'none';
        h4.style.display = 'none';
        serchIcon.style.display = 'none';
        // serchBar.style.backgroundColor = 'transparent';
        serchBar.style.cursor = 'auto';
        serchBar.style.height = '0vh';
        serchBar.style.padding = '0px';

        i.forEach(function (data) {
            data.style.fontSize = '25px';
            data.style.fontWeight = '700';
            data.style.marginLeft = '10px';

        })


    }



}

icon.addEventListener('click', navgestion);


