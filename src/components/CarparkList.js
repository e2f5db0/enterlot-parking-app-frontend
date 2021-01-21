import React from 'react'
import green from '../green.png'
import yellow from '../yellow.png'
import red from '../red.png'

const CarparkList = ({ carpark, render_carpark }) => {

    if (carpark.availability === 'green') {
        return (
            <div className='App-list-item' onClick={() => {
                render_carpark(carpark)
            }}>
                <div className='Carpark-list-item-upper-row'>
                    <p>{carpark.name}: </p>
                    <img className='App-availability-icon' src={green} alt='availability: green'></img>
                </div>
                <div className='Carpark-list-item-upper-row'>
                    <p className='Subnotation'>Write the address into your own navigator</p>
                </div>
            </div>
        )
    }

    if (carpark.availability === 'yellow') {
        return (
            <div className='App-list-item' onClick={() => {
                render_carpark(carpark)
            }}>
                <div className='Carpark-list-item-upper-row'>
                    <p>{carpark.name}: </p>
                    <img className='App-availability-icon' src={yellow} alt='availability: yellow'></img>
                </div>
                <div className='Carpark-list-item-upper-row'>
                    <p className='Subnotation'>Write the address into your own navigator</p>
                </div>
            </div>
        )
    }

    if (carpark.availability === 'red') {
        return (
            <div className='App-list-item' onClick={() => {
                render_carpark(carpark)
            }}>
                <div className='Carpark-list-item-upper-row'>
                    <p>{carpark.name}: </p>
                    <img className='App-availability-icon' src={red} alt='availability: red'></img>
                </div>
                <div className='Carpark-list-item-upper-row'>
                    <p className='Subnotation'>Write the address into your own navigator</p>
                </div>
            </div>
        )
    }
}

export default CarparkList