// Seleciona o elemento com o ID "dubaitext" e armazena em uma variável
let dubaiText = document.getElementById('dubaitext');

// Seleciona o elemento com o ID "burjkhalifa" e armazena em uma variável
let burjkhalifa = document.getElementById('burjkhalifa');

// Seleciona o elemento com o ID "stars" e armazena em uma variável
let stars = document.getElementById('stars');

// Adiciona um ouvinte de evento "scroll" à janela do navegador
window.addEventListener('scroll', () => {

  // Obtém o valor do deslocamento vertical atual da janela
  let value = window.scrollY;

  // Move o elemento "dubaitext" para a esquerda com uma velocidade duas vezes maior que a rolagem
  dubaiText.style.left = value * -2 + 'px';

  // Move o elemento "burjkhalifa" para cima com uma velocidade igual à rolagem
  burjkhalifa.style.top = value * 1 + 'px';

  // Move o elemento "stars" para cima com uma velocidade igual à rolagem
  stars.style.top = value * 1 + 'px';

});

let count = 1;
document.getElementById("radio1").checked = true;

setInterval(function(){
  nextImage();
},5000)

function nextImage(){
  count++;
  if(count>4){
    count = 1;
  }

  document.getElementById("radio"+count).checked = true;

}