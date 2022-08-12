// Codigo do Carro
let xCarros = [460, 470, 460, 460, 470, 460];
let yCarros = [40, 98, 148, 212, 264, 318];
let velocidadeCarros = [2, 2.5, 3.2, 1, 4.5, 5.2];
let comprimentoCarro = 50; 
let alturaCarro = 40;

function mostraCarro(){
  
  for(let contador = 0; contador < imagemCarros.length; contador += 1 ){
    image(imagemCarros[contador], xCarros[contador], yCarros[contador], comprimentoCarro, alturaCarro );  
  }
}

function movimentaCarros(){
  for(let i = 0; i < velocidadeCarros.length; i++){
    xCarros[i] -= velocidadeCarros[i];
    if(xCarros[i] < -40)
      xCarros[i] = width; 
  }
}

