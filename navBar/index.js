// let hamber =document.querySelector(".hamber");
// let nav =document.querySelector(".active");

// const NavItem = () =>{
//    nav.style.height='450px';
// }
// hamber.addEventListener('click',NavItem);

hamber =document.querySelector(".hamber");
hamber.onclick=function(){
    navBar =document.querySelector('.nav_bar');
    navBar.classList.toggle("active");
}
    
