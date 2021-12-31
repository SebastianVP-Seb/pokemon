import {useRouter} from 'next/router';

function PokemonDetail({pokemon}) {

    const router=useRouter();
    const id=router.query.id;

    // console.log(id)

    const {abilities, types, stats}=pokemon;


    return (
        <div className='pokemon'>

            <h2 className='pokemon-name'>{pokemon.name}</h2>

            <div className='pokemon-images'>
                <img className='pokemon-images-item' src={`${pokemon.sprites.other.dream_world.front_default}`} width={100} height={100} />
            </div>

            <div className='pokemon-images'>
                <img className='pokemon-images-item' src={`${pokemon.sprites.other.home.front_default}`} width={100} height={100} />
            </div>

            <h3 className='pokemon-title' >Habilidades</h3>
            {
                abilities.map(abiliti=><p className='pokemon-p'>{abiliti.ability.name}</p>)
            }
            <h3 className='pokemon-title' >Type</h3>
            {
                types.map(tipo=><p className='pokemon-p'>{tipo.type.name}</p>)
            }
            <h3 className='pokemon-title' >Estadísticas</h3>
            {
                stats.map(caracteristica=><p className='pokemon-p'>{caracteristica.stat.name}: {caracteristica.base_stat}</p>)
            }
        </div>
    );
};

export default PokemonDetail;

PokemonDetail.getInitialProps=async (context)=>{

    const respuesta=await fetch(`https://pokeapi.co/api/v2/pokemon/${context.query.id}`);
    const resultado=await respuesta.json();
    
    return {pokemon: resultado}
};