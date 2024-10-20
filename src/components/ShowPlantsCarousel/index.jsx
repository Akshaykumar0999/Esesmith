import './index.css';
import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const carouselProductsList = [
    {
        id: 1,
        imageUrl: 'https://res.cloudinary.com/dv1s34xce/image/upload/v1729402493/imgFive_uadyth.png',
        description: 'Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum'
    },
    {
        id: 2,
        imageUrl: 'https://res.cloudinary.com/dv1s34xce/image/upload/v1729402535/imgFour_fgzlh0.png',
        description: 'Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum'
    },
    {
        id: 3,
        imageUrl: 'https://res.cloudinary.com/dv1s34xce/image/upload/v1729402617/imgOne_mpnbso.png',
        description: 'Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum'
    },
    {
        id: 4,
        imageUrl: 'https://res.cloudinary.com/dv1s34xce/image/upload/v1729402649/imgThree_a63xkh.png',
        description: 'Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum'
    },
    {
        id: 5,
        imageUrl: 'https://res.cloudinary.com/dv1s34xce/image/upload/v1729402686/imgTwo_ksyats.png',
        description: 'Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum'
    },
    {
        id: 6,
        imageUrl: 'https://res.cloudinary.com/dv1s34xce/image/upload/v1729402493/imgFive_uadyth.png',
        description: 'Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum'
    },
]
function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "#949494", color: 'black', borderRadius: '50%' }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "#949494", color: 'black', borderRadius: '50%' }}
        onClick={onClick}
      />
    );
  }
const ShowPlantsCarousel = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };
    return (
        <div className="showplants-carousel-card">
            <h3 style={{fontSize: '20px', fontWeight:'bold'}}>Nursery</h3>
            <Slider {...settings} style={{width: '100%'}} >
                {carouselProductsList.map(eachItem => (
                    <div key={eachItem.id} className='plant-card'>
                        <img src={eachItem.imageUrl} alt={eachItem.id} style={{height: '120px', width: '120px', borderRadius:'50%', textAlign: 'center', margin:'auto'}} />
                        <p style={{width:'70%', textAlign: 'center', margin: 'auto', paddingTop: '10px'}}>{eachItem.description}</p>
                    </div>
                ))}
            </Slider>
        </div>

    );
}

export default ShowPlantsCarousel