import Carousel from 'react-bootstrap/Carousel';
import certificadojs from '../../assets/certificadoDesarrolloWeb.png'
import certificadoweb from '../../assets/certificadoJavaScript.png'
import certificadonode from '../../assets/certificadoNodejs.png'
import certificadoreact from '../../assets/certificadoReactJs.png'

function Carrucel() {
    return (
        <Carousel fade className='carrucel'>
        <Carousel.Item className='d-flex justify-content-center align-items-center'>
          <img src={certificadojs} alt="" />
          <Carousel.Caption>
           
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className='d-flex justify-content-center align-items-center'>
          <img src={certificadoweb} alt="" />
          <Carousel.Caption>
           
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className='d-flex justify-content-center align-items-center'>
          <img src={certificadonode} alt="" />
          <Carousel.Caption>
           
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className='d-flex justify-content-center align-items-center'>
          <img src={certificadoreact} alt="" />
          <Carousel.Caption>
           
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
  );
}

export default Carrucel;
