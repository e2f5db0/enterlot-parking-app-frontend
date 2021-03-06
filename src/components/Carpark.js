import React from 'react'
import icon from '../go-back.png'
import green from '../green.png'
import yellow from '../yellow.png'
import red from '../red.png'

const Carpark = ({ carpark, go_back }) => {

    if (carpark.availability === 'green') {
        return (
            <div>
                <div className='Heading-go-back'>
                    <img src={icon} className='App-back-icon' alt='Go back' onClick={() => go_back()}></img>
                    <h3>{carpark.name}</h3>
                </div>
                <div className='App-inline'>
                    <p>Availability:</p>
                    <p className='Availability'>Free</p>
                    <img className='App-inline App-availability-icon' src={green} alt='vihreä'></img>
                </div>
                <br></br>
                <p className='Over-map'>Write the address into your own navigator</p>
                <img src={`https://enterlot-parking-app-backend.herokuapp.com/map/${carpark.id}`} className='App-map' alt='Karttakuva'></img>
            </div>
        )
    }

    if (carpark.availability === 'yellow') {
        return (
            <div>
                <div className='Heading-go-back'>
                    <img src={icon} className='App-back-icon' alt='Go back' onClick={() => go_back()}></img>
                    <h3>{carpark.name}</h3>
                </div>
                <div className='App-inline'>
                    <p>Availability:</p>
                    <p className='Availability'>Half-full</p>
                    <img className='App-inline App-availability-icon' src={yellow} alt='keltainen'></img>
                </div>
                <br></br>
                <p className='Over-map'>Write the address into your own navigator</p>
                <img src={`https://enterlot-parking-app-backend.herokuapp.com/map/${carpark.id}`} className='App-map' alt='Karttakuva'></img>
            </div>
        )
    }

    if (carpark.availability === 'red') {
        return (
            <div>
                <div className='Heading-go-back'>
                    <img src={icon} className='App-back-icon' alt='Go back' onClick={() => go_back()}></img>
                    <h3>{carpark.name}</h3>
                </div>
                <div className='App-inline'>
                    <p>Availability:</p>
                    <p className='Availability'>Full</p>
                    <img className='App-inline App-availability-icon' src={red} alt='punainen'></img>
                </div>
                <br></br>
                <p className='Over-map'>Write the address into your own navigator</p>
                <img src={`https://enterlot-parking-app-backend.herokuapp.com/map/${carpark.id}`} className='App-map' alt='Karttakuva'></img>
            </div>
        )
    }
}

export default Carpark
