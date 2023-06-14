import React, { useContext, useEffect } from 'react'

import { Context } from "../App"

import { useNavigate } from 'react-router-dom'

const Carmod = () => {

    const [selectedCar, selectCar] = useContext(Context)

    const navigate = useNavigate()

    useEffect(() => {
        console.log(selectedCar)
        if (!selectedCar) {
            navigate('/')
        }
    }, [])

    return (
        <div>
            <span className='flex flex-row gap-[20px] text-[48px] justify-center'>
                <p>You've selected {selectedCar.manufacturer}'s</p>
                <p className='font-bold'>{selectedCar.model}</p>
                <p>SUV</p>
            </span>
            <section className='flex justify-center'>
                <img src={selectedCar.image} className='w-[600px] h-[400px]' />
            </section>
            <section>
                <p className='text-center text-[42px] font-thin'>From: ${selectedCar.price}</p>
            </section>
        </div>
    )
}

export default Carmod