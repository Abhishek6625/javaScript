let body =document.getElementById('body');
let header =document.createElement('header');
let h1 =document.createElement('h1');
h1.innerText='Abhi'
header.style.display='flex';

header.style.background='black';
header.style.color='white';
header.style.width='100%';
header.style.padding='10px';
header.style.display="flex"
header.style.justifyContent="space-between";
header.style.alignItems="center";
h1.style.width='80px';
h1.style.background='white';
h1.style.color='black';
h1.style.padding='8px';
h1.style.borderRadius='50%';
h1.style.cursor='pointer';


body.append(header);
header.append(h1);

let list =['Home','About','service','help us','Blogs'];

for(let i=0;i<list.length;i++){
    let a =document.createElement('a');
    a.innerText=list[i];
    a.setAttribute=('href','#');
    a.style.cursor='pointer';
    a.style.padding='8px';
    a.style.borderRadius='10px';

    header.append(a)
}

let all_link =document.getElementsByTagName("a");

for(let i=0;i<all_link.length;i++){
    all_link[i].addEventListener('mouseover',function(){
        all_link[i].style.background='white';
        all_link[i].style.color='black';
        all_link[i].style.transition='.4s';
    })

    all_link[i].addEventListener('mouseout',function(){
        all_link[i].style.background='black';
        all_link[i].style.color='white';

    })
}





