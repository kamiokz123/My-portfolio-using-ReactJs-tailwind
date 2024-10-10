import React from 'react'

function ProjectCard(
    {
        title,
        image,
        demoLink,
        codeLink
    }
) {
    return (
        <>
            <div className=' shadow-md hover:scale-105 duration-300 shadow-neutral-400 border-gray-400 flex flex-col justify-between text-sm items-center text-white border rounded-lg w-[200px] h-[280px] p-3'>
                <img className='h-[150px] rounded-md' src={image} alt={title + " image"} />
                <p>{title}</p>
                <div className='flex justify-between w-full gap-1'>
                <a href={demoLink} target='_blank' className='w-full h-full'><button className='border hover:bg-gray-300 hover:text-black duration-150  border-gray-400 rounded-md w-full h-full p-1'>Demo</button></a>
                <a href={codeLink} target='_blank' className='w-full h-full'> <button className='border hover:bg-gray-300 hover:text-black border-gray-400 rounded-md h-full w-full'> Code </button></a>
                </div>
            </div>
        </>
    )
}

export default ProjectCard;
