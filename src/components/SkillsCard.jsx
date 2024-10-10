import React from 'react'

function SkillsCard({
    title,
    image,
    style
}) {
  return (
    <div className={`flex hover:scale-105 duration-200 text-white gap-2 h-40 shadow-md p-4 rounded-lg w-30 justify-center items-center ${style} flex-col `}>
        <img src={image} alt={title + " logo image"}  className='h-24 w-24'/>
        <p>{title}</p>
    </div>
  )
}

export default SkillsCard
