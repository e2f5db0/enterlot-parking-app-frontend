import React from 'react'
import footer from '../footer.png'

const Footer = () => {
    return (
        <div className='App-footer'>
            <a href='https://enterlot.com/'>
                <img className='App-footer' src={footer} alt='Enterlot'></img>
            </a>
        </div>
    )
}

export default Footer