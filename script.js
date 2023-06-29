// aqueles negocios

const vermelho = document.getElementById('vermelho');
const verde = document.getElementById('verde');
const azul = document.getElementById('azul');
const amarelo = document.getElementById('amarelo');

const jogar = document.getElementById('jogar');

//codigo foda

let jogador=[], maquina=[];

randomizar();

vermelho.onclick = () =>{

    setTimeout(()=>{
        vermelho.style.backgroundColor = 'rgb(210, 60, 60)'
    },500);
    vermelho.style.backgroundColor = 'rgb(221, 131, 131)'
    jogador.push(2);
    console.log('Jogador ' + jogador);
};

verde.onclick = () =>{

    setTimeout(()=>{
        verde.style.backgroundColor = 'rgb(88, 230, 88)'
    },500);
    verde.style.backgroundColor = 'rgb(165, 255, 165)'
    jogador.push(1);
    console.log('Jogador ' + jogador);
};

amarelo.onclick = () =>{

    setTimeout(()=>{
        amarelo.style.backgroundColor = 'rgb(246, 246, 79)'
    },500);
    amarelo.style.backgroundColor = 'rgb(246, 246, 149)'
    jogador.push(3);
    console.log('Jogador ' + jogador);
};

azul.onclick = () =>{

    setTimeout(()=>{
        azul.style.backgroundColor = 'rgb(77, 77, 236)'
    },500);
    azul.style.backgroundColor = 'rgb(154, 154, 235)'
    jogador.push(4);
    console.log('Jogador ' + jogador);
};

jogar.onclick = ()=>{
  randomizar();
};

function randomizar (){
    maquina.push(Math.floor(Math.random() * 4 + 1));
    console.log('Máquina' + maquina);
}