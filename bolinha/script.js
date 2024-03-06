let xBolinha = 300;
let yBolinha = 200;
let diametro = 30;
let vxBolinha = 10;
let vyBolinha = 10;

let raio = diametro / 2;

//CRIAR VARIAVEL VELOCIDADE Y BOLINHA
function setup() {
    createCanvas(700, 400);
}
function draw() {
    background(0);
    circle(xBolinha, yBolinha, diametro);
    //VELOCIDADE X BOLINHA - AQUI A BOLINHA RECEBE A VELOCIDADE

    xBolinha += vxBolinha;
    yBolinha += vyBolinha;
    console.log(xBolinha);

    //ADICIONAR VELOCIDADE A BOLINHA
    console.log(xBolinha);

    //AS DUAS BARRAS SIGNIFICA OU
    if (xBolinha + raio > width || xBolinha - raio < 10) {
        vxBolinha *= -1;
    }
    //CRIA CONDIÇAO DA BOLINHA
    if (yBolinha + raio > height || yBolinha - raio < 10) {
        vyBolinha *= -1;
    }
    //velocidade da bolinha
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;


//variáveis da raquete
let xRaquete = 150;
let yRaquete = 150;
let raqueteComprimento = 90;
let raqueteAltura = 100;

//variáveis do oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeYOponente;


let colidiu = false;

//placar do jogo
let meusPontos = 0;
let pontosDoOponente = 0;



 function setup() {
    createCanvas(600, 400);
 }

 function draw() {
    background(0);
    mostraBolinha();
    movimentaBolinha();
    verificaColisaoBorda();
    mostraRaquete(xRaquete, yRaquete);
    movimentaMinhaRaquete();
    verificaColisaoRaquete();
    mostraRaquete(xRaqueteOponente, yRaqueteOponente);
    movimentaRaqueteOponente();
    colisaoRaqueteOponenteBiblioteca();
    incluiPlacar();
    marcaPonto();
 

 function mostraBolinha() {
    circle(xBolinha, yBolinha, diametro); 
 }

 function movimentaBolinha() {
    xBolinha += velocidadeXBolinha;
    yBolinha += velocidadeYBolinha;
 } 

 function verificaColisaoBorda() {
    if (xBolinha + raio > width ||
        xBolinha - raio < 0) {
        velocidadeXBolinha *= -1;
    }
    if (yBolinha + raio > height ||
        yBolinha - raio < 0) {
        velocidadeYBolinha *= -1;
    }
 }

 function mostraRaquete(x, y) {
    rect(x, y, raqueteComprimento, raqueteAltura);
 }
 function movimentaMinhaRaquete() {
    if (keyIsDown(UP_ARROW)) {
        yRaquete -= 10;
    }
    if (keyIsDown(DOWN_ARROW)) {
        yRaquete += 10;
    }
 }

 function verificaColisaoRaquete() {
    if (xBolinha - raio < xRaquete + raqueteComprimento &&
        yBolinha - raio < yRaquete + raqueteAltura &&
        yBolinha + raio > yRaquete) {
        velocidadeXBolinha *= -1;
    }

 }  
    function movimentaRaqueteOponente() {
        velocidadeYOponente = yBolinha - yRaqueteOponente - raqueteComprimento / 2 - 30;
        yRaqueteOponente += velocidadeYOponente
    }


    function colisaoRaqueteOponenteBiblioteca() {
        colidiu = collideRectCircle(xRaqueteOponente, yRaqueteOponente, raqueteComprimento, raqueteAltura, xBolinha, yBolinha, raio);
        if (colidiu){
            velocidadeXBolinha *= -1;
        }
    }

    function incluiPlacar() {
        fill(255);
        text(meusPontos, 278, 26);
        text(pontosDoOponente, 321, 26);
    }


    function marcaPonto() {
        if (xBolinha > 590) {
            meusPontos += 1;
        }
        if (xBolinha < 10) {
            pontosDoOponente += 1;
        }
    }
    
}
}