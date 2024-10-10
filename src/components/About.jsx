import React from 'react';
import ProfileImg from "../assets/profile-img.jpeg"


function About() {
  return (
    <>
    <div className='bg-gradient-to-b from-black mx-auto to-gray-800 text-gray-400 min-h-[87vh] flex flex-col justify-center items-center gap-8 py-8'>
        <h2 className='text-center font-bold text-3xl text-white '>About Me</h2>
        <div className='flex flex-col md:flex-row justify-center items-center '>

            <div className='flex flex-col gap-2 p-5 px-11'>
                <p>
                Hello! I'm Kamran Haider, a passionate Frontend Developer specializing in
                 React and Next.js. I am currently pursuing a degree in Computer 
                 System Engineering at Dawood University of Engineering and Technology,
                  Karachi. I have a strong grasp of modern frontend technologies,
                 including Redux Toolkit, React Router, Tailwind CSS, Bootstrap, and Material UI.
                </p>
                <p>
                I’ve also explored backend development with Node.js and have a
                 growing interest in blockchain technology, which I studied through a
                 course offered by the National Vocational and Technical Training
                  Commission (NVTTC).
                </p>
                <p>
                With a focus on building responsive, user-friendly,
                 and visually appealing web applications, I have developed
                  several projects, including my latest, Haider Mega Blogs
                   Website, which allows users to create and manage posts.
                 I also have hands-on experience with integrating e-commerce tools and platforms.
                </p>
                <p>
                Feel free to explore my portfolio and get in touch if you'd like to collaborate!
                </p>
            </div>

            <div className=' w-full pr-2 flex justify-center items-center'>
                <img src={ProfileImg} alt="my-2nd-profile" className='w-[250px] h-[300px] rounded-2xl' />
            </div>

        </div>
    </div>
    </>
  )
}

export default About
