let body = document.querySelector('body');
let a = document.querySelectorAll('.nav a');
let img = document.querySelector('.image')
let button = document.querySelectorAll('button')[0];
let button2 = document.querySelectorAll('button')[1];


let dark = function () {
  body.style.color = 'white';
  body.style.backgroundColor = "black";
  img.style.border = '10px solid black';
  button.style.backgroundColor = 'white';
  button2.style.backgroundColor = 'white';
  button.style.color = 'black';
  button2.style.color = 'black';
  a.forEach(function (data) {
    data.style.color = 'black';
    data.style.backgroundColor = 'white'

    a.addEventListener('mouseover', function (dta) {
      dta.style.backgroundColor = 'white';
      dta.style.color = 'black';
    })
    a.addEventListener('mouseout', function (dta1) {
      dta1.style.backgroundColor = 'black';
      dta1.style.color = 'white';
    })
  })

}

button.addEventListener('click', dark);


let light = function () {
  body.style.color = 'black';
  body.style.backgroundColor = "white";
  img.style.border = '10px solid white';
  button2.style.background = 'black';
  button.style.background = 'black';
  button2.style.color = 'white';
  button.style.color = 'white';
  a.forEach(function (data) {
    data.style.color = 'white';
    data.style.backgroundColor = 'black'

    a.addEventListener('mouseover', function (dta) {
      dta.style.backgroundColor = 'black';
      dta.style.color = 'white';
    })
    a.addEventListener('mouseout', function (dta1) {
      dta1.style.backgroundColor = 'white';
      dta1.style.color = 'black';
    })
  })

}

button2.addEventListener('click', light);