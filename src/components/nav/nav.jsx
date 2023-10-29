import React, { useState } from 'react'
import './nav.css'
import ButtonBurger from '../buttonBurger/buttonBurger'

function Nav() {

 
  const [burger, setBurger] = useState("off")
  const [active, setActive] = useState("")

  const burgerOn = () =>{
    if(burger === "off"){
    setBurger("on")
    setActive("active")
  }
  else{
    setBurger("off")
    setActive("")
    } 
  }


  return (
          <>
    <section className='sectionNav d-flex'>
        <div className='navLogo'>
         <a href="#home">
          <svg width="63" height="40" viewBox="0 0 63 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.260498 36.2615C2.05479 30.9456 3.88256 25.6398 5.62999 20.3103C7.56823 14.4109 9.473 8.49788 11.3041 2.5613C11.6824 1.3335 12.2381 0.918617 13.5169 0.87814C21.0924 0.642026 21.089 0.608295 23.5127 7.7322C24.065 9.35801 24.7278 10.9535 25.1496 12.613C25.5614 14.2388 26.2811 14.8291 28.052 14.6234C30.2112 14.3704 32.444 14.3771 34.6032 14.6267C36.364 14.8291 37.0435 14.2017 37.5256 12.6198C38.5265 9.33777 39.7718 6.13337 40.766 2.85138C41.228 1.3335 41.9879 0.756709 43.5546 0.881512C45.9648 1.0704 48.9743 0.247377 50.6313 1.42458C52.1812 2.52419 52.3218 5.66114 53.0449 7.91772C55.9874 17.1026 58.9132 26.2941 61.8423 35.4824C62.0097 36.0086 62.1335 36.5483 62.3879 37.5028C59.9174 37.5028 57.6779 37.5872 55.4551 37.4421C54.9363 37.4084 54.2701 36.6899 54.009 36.1266C51.9435 31.6978 48.7935 28.2876 44.8032 25.5521C44.2375 25.1642 43.7822 23.9634 43.9362 23.2921C44.3412 21.4977 45.1045 19.7841 45.784 17.8649C46.9657 18.4552 47.8896 18.9173 49.2287 19.5885C48.2278 16.1682 47.3273 13.0954 46.4268 10.0191C46.2393 9.99552 46.0552 9.97191 45.8677 9.94493C44.5086 13.9049 43.1763 17.875 41.787 21.8215C39.9693 26.9823 38.1616 32.1498 36.1933 37.2566C35.9087 37.9919 34.7806 38.8217 33.9939 38.8757C27.1649 39.3411 27.1582 39.2906 24.8618 32.8615C24.2291 31.0906 23.7001 29.2827 22.9972 27.5388C22.5017 26.311 22.9068 25.8084 24.0382 25.3463C28.5508 23.5013 28.9223 23.6429 30.5325 28.2606C30.7166 28.7902 30.961 29.2995 31.4062 30.3688C32.444 27.3297 33.321 24.7594 34.4124 21.5584C31.9084 21.7439 29.8362 21.7473 27.8143 22.0677C19.1173 23.4507 12.6699 27.9841 8.68297 36.0086C8.32813 36.7236 7.17657 37.3274 6.31959 37.4421C4.32444 37.712 2.28577 37.6546 0.263846 37.7288C0.260498 37.2431 0.260498 36.754 0.260498 36.2615ZM19.1475 16.6371C18.2972 14.2557 17.5138 12.0666 16.4962 9.22309C15.3881 12.9841 14.4743 16.0906 13.4432 19.5919C15.5856 18.4821 17.2293 17.6321 19.1475 16.6371Z" fill="white"/>
          </svg>
         </a>
        </div>
        <div className='conteinerNav'>
          <nav>
            <a className='f15 m-2 fbold' href="#about">ABOUT</a>
            <a className='f15 m-2 fbold' href="#proyectos">PROYECTOS</a>
            <a className='f15 m-2 fbold' href="#skills">SKILLS</a>
            <a className='f15 m-2 fbold' href="#contacto">CONTACTO</a>
          </nav>
        </div>

    </section>
      
    <a className='burgerBtn' onClick={burgerOn}><ButtonBurger active={active} /></a>


    <div className={`navBurger ${burger}`}>

        <svg className='rightTop' width="83" height="135" viewBox="0 0 83 135" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M0.0164303 134.6L74.0679 134.522L74.0678 134.522L82.1757 134.513L81.9031 0L73.7952 0.00854492L74.0515 126.414L0 126.492L0.0164303 134.6Z" fill="white"/>
        </svg>  

      <svg className='leftBot' width="83" height="135" viewBox="0 0 83 135" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M82.1592 0L8.10773 0.0780805L0 0.0866341L0.272591 134.6L8.38042 134.591L8.12416 8.1859L82.1757 8.10781L82.1592 0Z" fill="white"/>
      </svg>

          <nav>
            <a className='f25 m-3 fbold' href="#about">ABOUT</a>
            <a className='f25 m-3 fbold' href="#proyectos">PROYECTOS</a>
            <a className='f25 m-3 fbold' href="#skills">SKILLS</a>
            <a className='f25 m-3 fbold' href="#contacto">CONTACTO</a>
          </nav>
    </div>
      </>
  )
}

export default Nav