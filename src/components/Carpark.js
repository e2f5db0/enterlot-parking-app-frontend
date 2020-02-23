import React from 'react'
import icon from '../go-back.png'
import green from '../green.png'

const Carpark = ({ carpark, go_back }) => {

    return (
        <div>
            <img src={icon} className='App-back-icon' alt='Go back' onClick={() => go_back()}></img>
            <h3>{carpark.name}</h3>
            <div className='App-inline'>
                <h4 className='App-inline'>Paikkatilanne:</h4>
                <img className='App-inline App-availability-icon' src={green} alt='vihreä'></img>
            </div>
            <br></br>
            <img src={`https://enterlot-parking-app-backend.herokuapp.com/map/${carpark.id}`} className='App-map' alt='Karttakuva'></img>
        </div>
    )
}

export default Carpark
