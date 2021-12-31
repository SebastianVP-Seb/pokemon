import React from 'react'
import Image from 'next/image';


function Header() {
    return (
        <div className='header' >
            <Image src={'/img/pokemon-logo.png'} width={100} height={100} layout='fill' />
            
        </div>
    );
};

export default Header;
