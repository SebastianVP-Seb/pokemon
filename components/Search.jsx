import React, { useState } from 'react'
import CardList from './CardList'

function Search({data}) {

    const {results}=data;

    const [buscando, setBuscando]=useState('');

    const controlCambio=(e)=>{
        setBuscando(()=>e.target.value);
    };

    const pokemonsFiltrados=results.filter(pokemon=>
        pokemon.name.toLowerCase().includes(buscando.toLocaleLowerCase()));

    console.log(buscando);

    return (
        <>
            <div className='search' >
                <input className='search-input' placeholder='Introduce el nombre de un Pokemón...'   
                    onChange={controlCambio} value={buscando}
                />
            </div>

            <CardList pokemonsFiltrados={pokemonsFiltrados} />
        </>
    );
};

export default Search;
