
function Card({dato}) {

    // console.log(dato)

    return (
        <div className='card' >
            <p className='card-p' >?</p>
            <p className='card-name' >{dato.name}</p>
        </div>
    );
};

export default Card;
