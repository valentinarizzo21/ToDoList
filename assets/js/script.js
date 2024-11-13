const inputDelBox = document.getElementById('inputDelBox');
const btnContenitoreLista = document.getElementById('contenitoreLista');

const myArray = [];

function addTask(){
    if(inputDelBox.value === ''){
        alert ('Il valore da te inserito è nullo!');
    }else{
        let elementoNuovo = document.createElement('li'); //creo un nuovo elemento lista li
        
        elementoNuovo.innerText = inputDelBox.value; 
        btnContenitoreLista.appendChild(elementoNuovo);

        let btnBin = document.createElement('Bin');
        btnBin.innerText= '🗑️';
        btnBin.classList.add('tickList');
        elementoNuovo.appendChild(btnBin);

        myArray.push(elementoNuovo);

        console.log(myArray);
    }
    inputDelBox.value = '';
}







