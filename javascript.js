/*funçao para clique dos botoes */
const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
  button.addEventListener('click', e => {;
    button.classList.add('btnpressed');
    
  });
});

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    this.classList.remove('btnpressed');
}

buttons.forEach(button => button.addEventListener('transitionend', removeTransition));

/*fuçao para alterar texto*/

const btnFraseUm = document.querySelector('#fraseum');
btnFraseUm.addEventListener('click', () => {
    document.querySelector('#h1id').innerHTML = 'EU SEI QUE É UMA PEDRA';
    document.querySelector('#h3id').innerHTML = 'Acha que eu não sei o que é uma pedra quando eu vejo uma pedra?';
    document.querySelector("#flikedot").src = 'img/img-fraseum.jpg';
});

const btnFraseDois = document.querySelector('#frasedois');
btnFraseDois.addEventListener('click', () => {
    document.querySelector('#h1id').innerHTML = 'UMA SEMENTE!!!';
    document.querySelector('#h3id').innerHTML = 'Tem que colaborar, tá?';
    document.querySelector("#flikedot").src = 'img/img-frasedois.jpg';
});

const linkInicio = document.querySelector('#inicio');
linkInicio .addEventListener('click', () => {
    document.querySelector('#h1id').innerHTML = 'FINGE QUE É UMA SEMENTE';
    document.querySelector('#h3id').innerHTML = 'Tudo que formou essa árvore enorme já esteve dentro dessa semente pequenininha...';
    document.querySelector("#flikedot").src = 'img/img-inicial.jpg';
});