import React, { useEffect, useState, useRef } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { easeQuadInOut } from 'd3-ease';
import AnimatedProgressProvider from './AnimatedProgressProvider';

import './skill.css'

const Skill = ({ number, timerOut, timerIn, nombre, icon }) => {

  const [startAnimation, setStartAnimation] = useState(false);
  const [active, setActive] = useState("")
  const skillRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setStartAnimation(true);
            observer.unobserve(entry.target);

            setTimeout(() => {
              setActive("active")
            }, timerIn);

      
            setTimeout(() => {
              setActive("")
            }, timerOut);
                
          }
        });
      },
      { threshold: 0.5 } 
           
      // Ajusta este valor según tus necesidades
    );

    if (skillRef.current) {
      observer.observe(skillRef.current);
    }

    return () => {
      if (skillRef.current) {
        observer.unobserve(skillRef.current);
      }
    };
  }, []);

  return (
    <>
      <div ref={skillRef}>


        <div href="#" class={`social-container ${active}`}>
            <div class="social-cube">
            <div class="front">
              <img src={icon} alt="Mi SVG"></img>
            </div>
            <div class="bottom">
            <AnimatedProgressProvider
            valueStart={0}
            valueEnd={66}
            duration={1.4}
            easingFunction={easeQuadInOut}
            repeat={false}
            interval={0}
        >
            {value => {
            return (
                <CircularProgressbar
                value={startAnimation ? number : 0}
                text={`${startAnimation ? number : 0}%`}
                />
            );
            }}
        </AnimatedProgressProvider>
            </div>
            </div>
         </div>
         <p class="front f10 text-center">
                {nombre}
            </p>
        
      </div>
    </>
  );
};

export default Skill;