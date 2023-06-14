import React from 'react'

import { Link } from 'react-router-dom'

import { company, profile } from '../assets'

import { NavLinks } from '../data'

const Navbar = () => {
    return (
        <div>
            <nav className='flex flex-row items-center justify-between'>
                <Link to='/'><img src={company} /></Link>
                <ul className='flex flex-row gap-32'>
                    {NavLinks.map((link, index) => (
                        <li key={index} className='hover:border-b-[4px] border-[#27dfff] py-4'>
                            <Link to={`/${link.path}`}>{link.name}</Link>
                        </li>
                    ))}
                </ul>
                <img src={profile} className='w-10 h-10 hover:border-[3px] rounded-full border-[#27dfff] cursor-pointer' />
            </nav>
            <div className='w-full h-[2px] relative bg-[#a3a3a32f]' />
        </div>
    )
}

export default Navbar