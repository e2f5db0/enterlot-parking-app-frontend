import React from 'react'
import '../App.css'
import Carpark from './Carpark'
import green from '../green.png'
import yellow from '../yellow.png'
import red from '../red.png'

const CarparkList = ({ carpark }) => {

    if (carpark.availability === 'green') {
        return (
            <div className='App-list-item' onClick={() => {
                // render carpark
            }}>
                <p>{carpark.name}: <img className='App-availability-icon' src={green} alt='availability: green'></img></p>
            </div>
        )
    }

    if (carpark.availability === 'yellow') {
        return (
            <div className='App-list-item' onClick={() => {
                // render carpark
            }}>
                <p>{carpark.name}: <img className='App-availability-icon' src={yellow} alt='availability: yellow'></img></p>
            </div>
        )
    }

    if (carpark.availability === 'red') {
        return (
            <div className='App-list-item' onClick={() => {
                // render carpark
            }}>
                <p>{carpark.name}: <img className='App-availability-icon' src={red} alt='availability: red'></img></p>
            </div>
        )
    }
}

export default CarparkList