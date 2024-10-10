import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

function Navbar() {
    const [showMenu, setShowMenu] = useState(false);
    const navItems = [
        {
            id: 1,
            link: <a href="#home"  className='hover:text-white hover:scale-105 cursor-pointer'>Home</a>
        },
        {
            id: 2,
            link: <a href="#about" className='hover:text-white hover:scale-105 cursor-pointer'>About</a>
        },
        {
            id: 3,
            link: <a href="#portfolio" className='hover:text-white hover:scale-105 cursor-pointer'>Portfolio</a>
        },
        {
            id: 4,
            link: <a href="#skills" className='hover:text-white hover:scale-105 cursor-pointer'>Skills</a>
        },
        {
            id: 5,
            link: <a href="#contact" className='hover:text-white hover:scale-105 cursor-pointer'>Contact</a>
        }
    ]
    return (
        <>
            <nav className='w-full top-0 fixed box-border bg-black h-20 flex justify-between items-center border-b-2 border-gray-400 '>
                <h1 className='font-signature m-1 rounded-xl pr-2 p-2 md:text-2xl sm:text-xl text-white font-bold'>Kamran Haider</h1>

                <ul className='hidden  md:flex text-white '>
                    {navItems.map(({ id, link }) => (
                        <li
                            key={id}
                            className='px-3 text-gray-400 font-bold   duration-200'
                        >{link}</li>
                    ))}
                        <li  className='px-3 text-gray-400 font-bold  duration-200 '><a className='hover:text-white hover:scale-105 cursor-pointer' href="/my-resume.pdf" download={"kamran-haider-resume.pdf"}>Resume</a></li>

                </ul>
                <div onClick={() => setShowMenu(!showMenu)} className='px-3 md:hidden'>
                    {showMenu ? <FaTimes color='white' size={30} className=' cursor-pointer' /> : <FaBars color='white' size={30} className=' cursor-pointer' />}
                </div>
                {showMenu && (
                    <ul className='text-white flex flex-col h-screen bg-black items-center gap-2 absolute right-0 top-20 w-[100vw]'>
                        {navItems.map(({ id, link }) => (
                            <li
                                key={id}
                                className='px-3 mt-5   font-bold text-gray-400 hover:scale-105 duration-200 cursor-pointer'
                                onClick={() => setShowMenu(!showMenu)}
                            >{link}</li>
                            
                        ))}
                        <li onClick={() => setShowMenu(!showMenu)} className='px-3 mt-5  text-gray-400 font-bold   duration-200 '><a className='hover:text-white hover:scale-105 cursor-pointer' href="/my-resume.pdf" download={"kamran-haider-resume.pdf"}>Resume</a></li>
                    </ul>
                )}
            </nav>
        </>
    )
}

export default Navbar
