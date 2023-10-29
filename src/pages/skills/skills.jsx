import React, { useState, useEffect } from 'react';
import './skills.css'
import Skill from '../../components/skillProgres/skill';

import html from '../../assets/svg/html.svg'
import css from '../../assets/svg/css.svg'
import figma from '../../assets/svg/figma.svg'
import js from '../../assets/svg/js.png'
import react from '../../assets/svg/react.png'
import node from '../../assets/svg/node.png'
import bootstrap from '../../assets/svg/bootstrap.png'
import git from '../../assets/svg/git.png'
import sass from '../../assets/svg/sass.png'
import ai from '../../assets/svg/ai.jpg'
import ps from '../../assets/svg/ps.jpg'
import mongo from '../../assets/svg/mongodb.png'


const Skills = () => {



  return (
    <section className='containerSkills' id='skills'>
      <div className='containerSkillsProgram'>
          <h2 className='f25 fbold colorverde text-center pb-5 m-5'>PROGRAMACION</h2>
            <div className='conteinerTecnologias'>  
              <Skill nombre={"HTML"} icon={html} number={90} timerOut={2000} timerIn={500}/>
              <Skill nombre={"JS"} icon={js} number={85} timerOut={2100} timerIn={600}/>
              <Skill nombre={"CSS"} icon={css} number={90} timerOut={2200} timerIn={700}/>
              <Skill nombre={"React"} icon={react} number={80} timerOut={2300} timerIn={800}/>
              <Skill nombre={"Node"} icon={node} number={70} timerOut={2400} timerIn={900}/>
              <Skill nombre={"Bootstrap"} icon={bootstrap} number={80} timerOut={2500} timerIn={1000}/>
              <Skill nombre={"Git"} icon={git} number={70} timerOut={2600} timerIn={1100}/>
              <Skill nombre={"Sass"} icon={sass} number={70} timerOut={2700} timerIn={1200}/>
              <Skill nombre={"Mongo DB"} icon={mongo} number={90} timerOut={2800} timerIn={1300}/>
            </div>
      </div>
      <div className='containerSkillsDiseño'>
        <h2 className='f25 fbold colorverde text-center mt-5'>DISEÑO WEB</h2>
        <div className='conteinerTecnologias'>  
              <Skill nombre={"Figma"} icon={figma} number={80} timerOut={2000} timerIn={500}/>
              <Skill nombre={"Ilustrator"} icon={ai} number={60} timerOut={2100} timerIn={600}/>
              <Skill nombre={"Photoshop"} icon={ps} number={60} timerOut={2200} timerIn={700}/>
         </div>
      </div>
    </section>
  )
}

export default Skills
