// Chiedere all'utente di inserire il numero di celle di cui sarà composto il campo da gioco.
var numCell = parseInt(prompt("Inserisci il numero di celle del campo da gioco"));
while(isNaN(numCell) || numCell < 1){
    numCell = parseInt(prompt("Errore! Inserisci un numero di celle maggiore di 0"));
}
// Tramite una funzione javascript disegnare in pagina la griglia con massimo 10 celle per riga.
function campo(celle){
    for(i=1; i <= numCell; i++ ){
        document.getElementById("campo").innerHTML += `<div class="quadrato">${i}</div>`;
    }
}

campo(numCell);

// Al click su una cella dovrà essere mostrato con un alert il numero della cella e il suo background diventerà rosso.
document.getElementById("campo").addEventListener("click", 
    function(event){
        alert(event.target.innerHTML);
        event.target.classList.toggle("rosso");
    }
);
