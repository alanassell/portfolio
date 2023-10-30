import React, { useState, useRef } from 'react';
import './modal.css'
import Offcanvas from 'react-bootstrap/Offcanvas';

const ModalProyecto = ({proyecto}) => {

  const [show, setShow] = useState(false);
  const offcanvasRef = useRef();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <span onClick={handleShow} className="material-symbols-outlined">
        open_in_new
      </span>

      <Offcanvas className="modalProyect" ref={offcanvasRef} show={show} onHide={handleClose} placement="end">
        <Offcanvas.Body> 
          <a className='btnClose' onClick={handleClose}>
            <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 3L26.5 26.5M26.5 3L3 26.5" stroke="white" stroke-width="5" stroke-linecap="round"/>
            </svg>
          </a>


          

          <div className='containerImg'>
            <div>
              <img src={proyecto.backgroundUrl} alt="" />
            </div>
          </div>
          <div className='containerInfo'>
              <h2 className='f20 fbold'>{proyecto.nombre}</h2>
              <p className='f10'>{proyecto.descripcion2}</p>
              <div className='tecnologias'>
                  {proyecto.tecnologias.map((tec)=>{
                    return <span className='f10 tecnologais'>{tec}</span>            
                  })}
              </div>
              {proyecto.link ?
            <a href={proyecto.link} target='_blank' className='btnLink pt-2'>
              <span className="material-symbols-outlined">
                open_in_new
              </span>
            </a> 
          : null}
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default ModalProyecto;
