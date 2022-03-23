const fetchPokemon = () =>{
    const pokeName = document.getElementById("pokeName");
    let pokeInput = pokeName.value.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeInput}`;
    
    fetch(url).then((res) => { 
        if(res.status !=200){
            console.log(res);
            pokeImage("img/pokemonsad.png");
        }     
        else{
            return res.json();
        }        
    }).then((data) => {
        console.log(data);
        let pokeImg = data.sprites.front_default;
        console.log(pokeImg);
        pokeImage(pokeImg);
    })
}
const pokeImage = (url) => {
    const pokeImg = document.getElementById("pokeImg");
    pokeImg.src = url;
}

const pokemonName = document.getElementById('pokeNameA');
const pokemonId = document.getElementById('pokeId');

const pokemonHability = document.getElementById('pokeHability');
const pokemonType = document.getElementById('pokeType');

const pokemonHp = document.getElementById('pokeHp');
const pokemonAtaque = document.getElementById('pokeAtaque');
const pokemonDefensa= document.getElementById('pokeDefensa')
const pokemonAEspecial = document.getElementById('pokeAEspecial');
const pokemonDEspecial = document.getElementById('pokeDEspecial');
const pokemonVelocidad = document.getElementById('pokeVelocidad');

const pokemonHeight = document.getElementById('pokeHeight');
const pokemonWeight = document.getElementById('pokeWeight');

