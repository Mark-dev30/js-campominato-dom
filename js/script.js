/* CONSEGNA:

L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100. 
Ci saranno quindi 10 caselle per ognuna delle 10 righe. 
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto
un messaggio in console con il numero della cella cliccata. */

function createElement (number)
{
    
    const divElement = document.createElement('div');

    divElement.classList.add("square");

    divElement.innerText = number;

    return divElement;
}

const btn = document.getElementById("btn-play");

 btn.addEventListener('click', function(){

    let grid = document.getElementById("grid");
    document.getElementById('grid').innerHTML = '';
    for (let i = 0; i<100; i++){
        const currentSquare = createElement (i+1);

        currentSquare.addEventListener('click', function(){
            this.classList.add("click") 
            console.log(this.innerText);
            

        })
        grid.appendChild(currentSquare);
    }

 })
