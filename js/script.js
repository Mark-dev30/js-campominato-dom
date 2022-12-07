/* CONSEGNA:

L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100. 
Ci saranno quindi 10 caselle per ognuna delle 10 righe. 
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto
un messaggio in console con il numero della cella cliccata. */

/* Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe. Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.
In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba. */

function generateBombs(min, max)
{
    let arraybombs = [];
    let i = 0;
    while (i < 16) {
        let numrandom = Math.floor(Math.random() * (max - min + 1) + min);
        if (!arraybombs.includes(numrandom)){
            arraybombs.push(numrandom)
            i++
        
        }
    }
    return arraybombs;
}

function createElement (number)
{
    
    const divElement = document.createElement('div');

    divElement.classList.add("square");

    divElement.innerText = number;

    return divElement;
}


let bombs = generateBombs (1,100);
let score = 0;
console.log(bombs);
const btn = document.getElementById("btn-play");

 btn.addEventListener('click', function(){

    let grid = document.getElementById("grid");
    document.getElementById('grid').innerHTML = '';
    for (let i = 0; i<100; i++){
        const currentSquare = createElement (i+1);

        currentSquare.addEventListener('click', function(){
            this.classList.add("click") 
            if (bombs.includes(parseInt(this.innerText))){
                this.classList.add("red");
            }
            else if (score < 84){
                score++;
                console.log(`${'Punteggio: '} ${score}`);
            }
            else{
                alert(`hai vinto il tuo punteggio è: ${score} punti `);
            }
            
        })
        grid.appendChild(currentSquare);
    }

 })
