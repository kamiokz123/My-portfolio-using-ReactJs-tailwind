import React from 'react';
import blogWebImg from "../assets/portfolioImgs/blog-food-web.png"
import connect4Img from "../assets/portfolioImgs/connect-4-game.png"
import megaBlogWebImg from "../assets/portfolioImgs/mega-blog-web-on-react-appwrite.png"
import roboWebImg from "../assets/portfolioImgs/robo-api-project.png"
import diceGameImg from "../assets/portfolioImgs/simple-dice-game.png"
import simpleWebImg from "../assets/portfolioImgs/simple-web-react-router.png"
import ProjectCard from './ProjectCard';



function Portfolio() {
  const projectsList = [
    {
      id:1,
      title: "Mega blog CRUD website using ReactJs and Appwrite",
      image: megaBlogWebImg,
      demoLink : "https://haidermegablogsv1-nuiez2xwp-kamran-haiders-projects.vercel.app/",
      codeLink : "https://github.com/kamiokz123/mega-blog-website-reactJs-and-tailwind"
    },
    {
      id:2,
      title: "Simple food blog website using ReactJs and Material UI",
      image: blogWebImg,
      demoLink : "https://capable-swan-0feda1.netlify.app/",
      codeLink : "https://github.com/kamiokz123/blog-web-react-and-mui"
    },
    {
      id:3,
      title: "Connect 4 game Using ReactJs ",
      image: connect4Img,
      demoLink : "https://kamran-connect-4-game.netlify.app/",
      codeLink : "https://github.com/kamiokz123/connect-4-game-on-react/tree/main/connect4-game-on-react-and-nodejs"
    },
    {
      id:4,
      title: "Simple robo website using robo api on ReactJs",
      image: roboWebImg,
      demoLink : "https://kamranrobofriends.netlify.app/",
      codeLink : "https://github.com/kamiokz123/robo-friends-project-using-react"
    },
    {
      id:5,
      title: "Simple blog website using ReactJs also React router",
      image: simpleWebImg,
      demoLink : "https://ephemeral-kulfi-bfc304.netlify.app/",
      codeLink : "https://github.com/kamiokz123/react-router-web"
    },
    {
      id:6,
      title: "Simple dice game using HTML , CSS and Javascript",
      image: diceGameImg,
      demoLink : "https://dice-game-simple.netlify.app/",
      codeLink : "https://github.com/kamiokz123/dice_game_using_dom"
    }
  ] 
  return (
    <>
    <div id='portfolio' className=" min-h-[100vh] flex flex-col mx-auto  justify-center items-center p-8 pt-11  text-gray-400  bg-gradient-to-b from-black to-gray-800 text-center ">

        <div className='flex flex-col justify-center items-center gap-3'>
        <h2 className='text-center font-bold text-3xl text-white  w-[150px] p-2 '>Portfolio</h2>
        <p>Check out some of my work right here</p>
        </div>
        <div className="flex flex-wrap px-12 gap-8 mt-10 items-center justify-center">
          {projectsList.map(({id, title , image , demoLink , codeLink})=>{
            return <ProjectCard key={id} title={title} image={image} demoLink={demoLink} codeLink={codeLink} />
          })}
        </div>
    </div>
    </>
  )
}

export default Portfolio
