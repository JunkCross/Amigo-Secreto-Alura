// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigosSorteo = [];
let numeroSorteado = 0;


function agregarAmigo(){
    let amigo = document.getElementById('amigo').value;
    console.log(amigo);
    console.log(typeof(amigo));
    if (amigo === '') {
        alert('Por favor, ingresa el nombre de un amigo.');
        return;
    }

    amigosSorteo.push(amigo);

    //let listaAmigos = document.querySelector('#listaAmigos');
    //listaAmigos.innerHTML
    //let listaAmigos = document.getElementById('listaAmigos');
    //listaAmigos.innerHTML += `<li>${amigo}</li>`;

    document.getElementById('amigo').value = '';
    agregarAmigoHTML(amigo);

    console.log(amigosSorteo);
    return;
}

function agregarAmigoHTML(amigo) {
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ''; // Limpiar la lista antes de agregar
    for (let i = 0; i < amigosSorteo.length; i++) {
        listaAmigos.innerHTML += `<li>${amigosSorteo[i]}</li>`;
    }
    return;
}