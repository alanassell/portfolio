import React, { useState } from 'react'
import mundial from '../../assets/proyectos/webmundial.png'
import ecommercevanilla from '../../assets/proyectos/ecommercevanilla.png'
import megatech from '../../assets/proyectos/megatech.png'
import panel from '../../assets/proyectos/panel2.png'
import './proyects.css'
import ModalProyecto from '../../components/modalProyecto/modalProyecto';

function Proyects() {


    const [activeOption, setActiveOption] = useState(0);

    const handleOptionClick = (index) => {
      setActiveOption(index);
    };
  
    const options = [
      {
        backgroundUrl: ecommercevanilla,
        nombre: 'E-commerce Apple vanilla',
        descripcion1: 'E-commerce básico desarrollado utilizando únicamente tecnologías front-end.',
        descripcion2: `
        Este proyecto es un e-commerce básico desarrollado utilizando únicamente tecnologías front-end: HTML, CSS y JavaScript puro, sin la dependencia de ningún framework. La aplicación proporciona una experiencia de compra intuitiva y eficiente, demostrando la capacidad de construir interfaces interactivas y atractivas sin la necesidad de bibliotecas adicionales.

        Características Destacadas:

        Interfaz de usuario limpia y atractiva diseñada con HTML y CSS.
        Funcionalidades de carrito de compras y gestión de productos mediante JavaScript.
        Navegación fluida y experiencia de compra sin interrupciones.
        Integración de medios responsivos para una experiencia óptima en dispositivos móviles y escritorio.

        `,
        tecnologias: ["HTML","JS","CSS"],
        link: "https://alanassell.github.io/ecommerceVanilla/",
      },
      {
        backgroundUrl: mundial,
        nombre: 'Blog Mundial Qatar 2022',
        descripcion1: 'Blog informativo dedicado al Mundial de la FIFA Qatar 2022.',
        descripcion2: `
        Este proyecto es un blog informativo dedicado al Mundial de la FIFA Qatar 2022. Desarrollado con tecnologías front-end puras: HTML, CSS y JavaScript, el sitio proporciona a los aficionados al fútbol un lugar centralizado para obtener información sobre los partidos, horarios, equipos, noticias, resultados y estadios del torneo.

        Características Destacadas:
        
        Visualización de partidos con detalles como fecha, hora y equipos enfrentados.
        Sección de noticias actualizadas sobre el Mundial 2022.
        Información detallada sobre los equipos participantes.
        Resultados en tiempo real y estadísticas de los partidos.
        Detalles sobre los estadios donde se celebrarán los encuentros.
        `,
        tecnologias: ["HTML","JS","CSS","Bootstrap"],
        link: "https://lighthearted-banoffee-6dc256.netlify.app/",
      },
      {
        backgroundUrl: panel,
        nombre: 'Panel de administrcion jugdores',
        descripcion1: 'Proyecto Full Stack. Panel de administración dedicada a la gestión de usurios.',
        descripcion2: `
        Este proyecto es un panel de administración desarrollado para una empresa privada dedicada a la gestión de usuarios para un juego. Permite a los trabajadores acceder a través de un sistema de login con diferentes roles asignados para llevar a cabo tareas específicas. La aplicación utiliza tecnologías modernas como React.js para el front-end, Node.js y Express.js para el back-end, y se integra con una base de datos MongoDB utilizando Mongoose para la gestión de datos. Se implementa Bootstrap para el diseño y DataTables para la visualización de datos tabulares, ofreciendo una experiencia de usuario intuitiva y eficiente.

        `,
        tecnologias: ["React js","Node js","Express","Mongodb","Bootstrap","Data table"],
      },
      {
        backgroundUrl: megatech,
        nombre: 'MegaTech E-commerce',
        descripcion1: 'E-commerce en desarrollo diseñado para la tienda "MegaTech".',
        descripcion2: `
        Este proyecto es un e-commerce en desarrollo diseñado para la tienda "MegaTech". Está siendo construido con tecnologías modernas, utilizando React.js para el front-end y Node.js junto con MongoDB para el back-end y la base de datos, respectivamente. Además de la tienda en línea, el proyecto incluye un panel de administración que permite a los usuarios autorizados modificar el stock y los precios de los productos.

        Características Destacadas:

        Interfaz de usuario atractiva y responsive desarrollada con React.js.
        Sistema de gestión de productos y control de inventario.
        Integración de Node.js para el back-end y MongoDB para la base de datos.
        Panel de administración para modificar el stock y precios de los productos.

        `,       
        tecnologias: ["React js","Node js","Express","Mongodb","Bootstrap"],
        link: "https://alanassell.github.io/EcomerceReactMT/",
      }
    ];


  return (


    <section className='containerProyects' id='proyectos'>
        <div className='proyectContainer'>      
        <h2 className='f25 fbold colorverde text-center pb-5 m-5'>PROYECTOS</h2>
            <div className="options">
                {options.map((option, index) => (
                <div
                key={index}
                className={`option ${index === activeOption ? 'active' : ''}`}
                style={{ '--optionBackground': `url(${option.backgroundUrl})` }}
                onClick={() => handleOptionClick(index)}
                >
                <div className='optionBack'></div>
                <div className="shadow"></div>
                <div className="icon">
                    {index === activeOption ? 
                    <>
                        <ModalProyecto proyecto={option} />                        
                    </>
                    : 
                    <>
                      <span class="material-symbols-outlined">
                        fullscreen
                      </span>
                    </>
                    }
                </div>
                <div className="label">
                    <div className="info">
                        <h1 className='f20 fbold'>{option.nombre}</h1>
                        <p className='f15'>{option.descripcion1}</p>
                        <div>
                          {option.tecnologias.map((tec)=>{
                            return <span className='f10 tecnologais'>{tec}</span>            
                          })}
                        </div>
                    </div>
                    </div>
                </div>
             ))}
            </div>
        </div>  
    </section>

    
 
 


    )
}

export default Proyects