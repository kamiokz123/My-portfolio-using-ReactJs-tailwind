import React from 'react';
import bootstrapImg from "../assets/skills/bootstrap.png"
import cssImg from "../assets/skills/css.png"
import githubImg from "../assets/skills/github.png"
import htmlImg from "../assets/skills/html.png"
import jsImg from "../assets/skills/js.png"
import muiImg from "../assets/skills/mui.png"
import nextImg from "../assets/skills/next.png"
import nodeImg from "../assets/skills/node.png"
import reactImg from "../assets/skills/react.png"
import solidityImg from "../assets/skills/solidity.png"
import tailwindImg from "../assets/skills/tailwind.png"
import SkillsCard from './SkillsCard';


function Skills() {

  const skillsList = [
    {
      id: 1,
      title: "HTML",
      image: htmlImg,
      style: "shadow-orange-600", // HTML - Orange
    },
    {
      id: 2,
      title: "CSS",
      image: cssImg,
      style: "shadow-blue-500", // CSS - Blue
    },
    {
      id: 3,
      title: "Javascript",
      image: jsImg,
      style: "shadow-yellow-500", // JavaScript - Yellow
    },
    {
      id: 4,
      title: "ReactJs",
      image: reactImg,
      style: "shadow-react-blue", // React - Custom React Blue (#61DBFB)
    },
    {
      id: 5,
      title: "NextJs",
      image: nextImg,
      style: "shadow-gray-500", // Next.js - Dark Gray
    },
    {
      id: 6,
      title: "Bootstrap",
      image: bootstrapImg,
      style: "shadow-purple-600", // Bootstrap - Purple
    },
    {
      id: 7,
      title: "Tailwind CSS",
      image: tailwindImg,
      style: "shadow-teal-400", // Tailwind CSS - Teal
    },
    {
      id: 8,
      title: "Material UI",
      image: muiImg,
      style: "shadow-blue-400", // Material UI - Light Blue
    },
    {
      id: 9,
      title: "Solidity",
      image: solidityImg,
      style: "shadow-gray-500", // Solidity - Gray
    },
    {
      id: 10,
      title: "GitHub",
      image: githubImg,
      style: "shadow-gray-500", // GitHub - Dark Gray
    },
    {
      id: 11,
      title: "NodeJs",
      image: nodeImg,
      style: "shadow-green-500", // Node.js - Green
    },
  ];
  
  return (
    <div className=' min-h-[88vh] py-10  mx-auto flex flex-col justify-center  items-center p-8 pt-11  text-gray-400  bg-gradient-to-b from-black to-gray-800 text-center'>
      
      <div className='flex flex-col items-center'>
        <h2 className='text-center font-bold text-3xl text-white  w-[150px] p-2'>Skills</h2>
        <p className=''>These are the technologies I've worked with  </p>
      </div>

      <div className="flex gap-8 px-10 p-2 mt-8 flex-wrap justify-center items-center">
        {
          skillsList.map(({id , title , image , style})=>{
            return <SkillsCard key={id} title={title} image={image} style={style} />
          })
        }
      </div>
    </div>
  )
}

export default Skills
