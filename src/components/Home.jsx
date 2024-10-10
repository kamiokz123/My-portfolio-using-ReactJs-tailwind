import React from 'react';
import NewDp from "../assets/new-profile.jpeg"
import { FaArrowRight, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

function Home() {
    return (
        <>
            <div className=" min-h-[88vh] mx-auto  text-gray-400 flex flex-col md:flex-row justify-center items-center bg-gradient-to-b from-black to-gray-800 gap-4 text-center px-2 mt-20 py-6">
                <div className="p-6  mt-8  justify-center items-center flex flex-col  gap-5">
                    <h2 className='font-bold text-2xl '>Hi, I'm <span className='text-white'>Kamran Haider </span>, a <span className='text-white'>Frontend Developer </span> specializing in React and Next.js</h2>
                    <p>
                        I’m passionate about building dynamic and responsive web
                        applications that deliver seamless user experiences. With a
                        focus on clean code and modern design, I strive to bring innovative ideas to
                        life while ensuring performance and accessibility.
                    </p>
                    <button className='group w-[150px] border p-1 rounded-lg flex items-center justify-center gap-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white'>
                        portfolio
                        <span className='group-hover:rotate-90 duration-200'>
                        <FaArrowRight />
                        </span>
                    </button>
                    <div className='flex gap-3 mt-3 text-white '>
                        <a href="https://pk.linkedin.com/in/kamran-haider-orakzai-065566180" target='_blank' className='hover:text-blue-400 duration-200 hover:scale-110'> <i className="fab fa-react"><FaLinkedin size={25}/></i> </a>
                        <a href="https://github.com/kamiokz123" target='_blank' className='hover:text-blue-400 duration-200 hover:scale-110'> <i className="fab fa-react"><FaGithub size={25} /></i>  </a>
                        <a href="mailto:haiderokz888@gmail.com" target='_blank' className='hover:text-blue-400 duration-200 hover:scale-110'> <i className="fab fa-react"> <MdEmail size={25} /></i>  </a>

                    </div>
                </div>
                <div className="flex w-full justify-center items-center mb-6 md:mb-0">
                    <img src={NewDp} alt="my-profile" className='w-[280px] h-[320px] rounded-full' />
                </div>
            </div>
        </>
    )
}

export default Home
