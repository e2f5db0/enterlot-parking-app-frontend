import React, { useState } from 'react'
import CarparkList from './CarparkList'
import Carpark from './Carpark'
import Banner from './Banner'

const Body = ({ carparks }) => {

    const [list, setList] = useState(true)
    const [carpark, setCarpark] = useState('')

    if (list === true) {
        return (
            <div className='App-body'>
                <Banner />
                <div>
                    {
                        carparks.map(carpark => <CarparkList key={carpark.name} carpark={carpark} render_carpark={(carpark) => {
                            setList(false)
                            setCarpark(carpark)
                        }} />)
                    }
                </div>
            </div>
        )
    } else {
        return (
            <div className='App-body'>
                <Banner />
                <Carpark carpark={carpark} go_back={() => setList(true)} />
            </div>
        )
    }
}

export default Body