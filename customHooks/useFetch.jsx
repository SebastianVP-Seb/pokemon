import { useEffect, useState } from 'react';

function useFetch() {

    const [loading, setLoading]=useState(true);
    const [data, setData]=useState(null);
    const [error, setError]=useState(null);

    useEffect(()=>{
        (async ()=>{
            try {
                const respuesta=await fetch('https://pokeapi.co/api/v2/pokemon?limit=1120');
                const resultado=await respuesta.json();
                setData(resultado);
                setLoading(false);
                
            } catch (error) {
                setError(error);
            }
        })();
    }, []);
    // console.log(data);
    return {loading, data, error};

};

export default useFetch;
