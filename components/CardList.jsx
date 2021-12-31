import React, { useState } from 'react';
import Card from './Card';
import Router from 'next/router';

function CardList({pokemonsFiltrados}) {

    const [pagActual, setPagActual]=useState(0);

    const pagSiguiente=()=>{

        if(pokemonsFiltrados.filter(pokemon=>
            pokemon.name.toLowerCase().includes(pokemon.name.toLocaleLowerCase())).length > pagActual+10) {

                setPagActual(()=> pagActual+10)            
            };
    };
    
    const pagAnterior=()=>{
        if(pagActual>0) {
            setPagActual(()=> pagActual-10)
        };
    };

    const pokeFilt=()=>{
        return pokemonsFiltrados.slice(pagActual,pagActual + 10);
    };
    
    return (
        <div className='cardlist-contenedor' >
            {
                pokeFilt().map((dato, index)=>{

                    const url=dato.url;
                    const hola=url.split('/');
                    const id=hola[6];

                    return (
                        <div key={index} onClick={()=>{
                            Router.push('/pokemon/[id]', `/pokemon/${id}`)
                        }}>
                            <Card dato={dato} />
                        </div>
                    );
                })
            }
            <button onClick={pagAnterior} >Prev</button>
            <button onClick={pagSiguiente} >Next</button>
        </div>
    );
};

export default CardList;
