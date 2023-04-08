let body =document.getElementById("body");
let header =document.createElement("header");
header.style.border='2px solid black';
header.style.backgroundColor='black';
header.style.display="flex"
header.style.justifyContent="space-between";
header.style.alignItems="center";

let h1=document.createElement("h2");
h1.innerHTML="Abhi";
h1.style.color="black";
h1.style.marginLeft="40px";
// h1.style.border="2px solid red";
h1.style.padding="10px";
h1.style.borderRadius="50%"
h1.style.backgroundColor="white";


let nav =document.createElement('nav');

let navText=["Home","About","Concact","Help Us","Service"]

for (let i=0;i<5;i++){
    let a =document.createElement("a");
    a.innerText=navText[i];
    a.setAttribute("href","#");
    a.style.color="black";
    a.style.textDecoration='none';
    a.style.marginRight="50px"
    a.style.padding="10px";
    a.style.backgroundColor="white";
    a.style.borderRadius="10px";
    a.style.fontWeight="700";


    nav.append(a);
}


body.append(header);
header.append(h1);
header.append(nav);


let all_link =document.getElementsByTagName("a");

for(let i=0;i<all_link.length;i++){
    all_link[i].addEventListener("mouseover",() =>{
        all_link[i].style.backgroundColor="green";
        all_link[i].style.color="white";
    })
    all_link[i].addEventListener("mouseout", () =>{
        all_link[i].style.background="white";
        all_link[i].style.color="black";

    })

}
