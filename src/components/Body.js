import React from 'react'
import CarparkList from './CarparkList'
import '../App.css'
import banner from '../banner.png'

const Body = ({ carparks }) => {
    return (
        <div className='App-body'>
            <a href='https://www.kuninkuusravit.fi/'>
                <img className='App-banner' src={banner} alt='Kuninkuusravit 2020 - Seinäjoki 31.7.-2.8.2020'></img>
            </a>
            <h2>Pysäköinti</h2>
            <div>
                {
                    carparks.map(carpark => <CarparkList key={carpark.name} carpark={carpark} />)
                }
            </div>
        </div>
    )
}

export default Body