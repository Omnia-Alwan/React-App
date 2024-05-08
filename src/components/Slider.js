
import imgg1 from './sliderImages/imgg1.jpeg';
import imgg2 from './sliderImages/imgg2.png';
import imgg3 from './sliderImages/imgg3.png';
import './Slider.css'

function Slider(){
    return(
        <>
        <div id="carouselExample" className="carousel slide">

  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={imgg1} className="m" alt="..."/>
    </div>

    <div className="carousel-item">
    <img src={imgg2} className="m" alt="..."/>
       </div>

    <div className="carousel-item">
      <img src={imgg3} className="m" alt="..."/>
    </div>
  </div>

  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
        </>
    );
}

export default Slider;