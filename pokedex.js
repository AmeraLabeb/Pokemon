let pokemons=[];

const poke_container=document.getElementById("poke_container");
const url="https://pokeapi.co/api/v2/pokemon";
const pokemons_number=151;
const search=document.getElementById("shearch");
const form=document.getElementById("form");

const fetchpokemons =async()=>{
    for(let i = 1;i<=pokemons_number;i++){
        await getAllpokemon(i);
    }
    pokemons.forEach((pokemon)=> createPokemoncard(pokemon));
};

const removepokemon=()=>{
    const pokemonEls=document.getElementsByClassName("pokemon");
    let removablepokemons=[];
    for (let i=0; i<pokemonEls.length;i++){
        const pokemonEl=pokemonEls[i];
        removablepokemons=[...removablepokemons,pokemonEl];
        removablepokemons.forEach((rempoke)=>rempoke.remove());
    }
};
const getpokemon=async(id)=>{
    const searchpokemons=pokemons.filter((poke)=>poke.num===id);
    removepokemon();
    searchpokemons.forEach((pokemon)=>createPokemoncard(pokemon));
};

const getAllpokemon =async(id)=>{
    const res=await fetch('${url}/${id}');
    const pokemon =await res.json();
    pokemons=[...pokemons.pokemon];
};
fetchpokemons();
function createPokemoncard(pokemon){
    const pokemonEl=document.createElement("div");
    pokemonEl.createElement ``
}
