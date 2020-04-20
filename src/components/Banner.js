import React from 'react'
import banner from '../banner.jpg'

const Banner = () => {
    return (
        <div>
            <a href='https://www.kuninkuusravit.fi/'>
                <img className='App-banner' src={banner} alt='Kuninkuusravit 2020 - Seinäjoki 31.7.-2.8.2020'></img>
            </a>
            <h2>Pysäköinti</h2>
        </div>
    )
}

export default Banner
