import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ItemSlider = () => 
{
    const settings = {
      dots: true,
      dotClass: 'slick-dots custom-dots',
      infinite: true,
      speed: 400,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true, // enable autoplay
      autoplaySpeed: 3000, // set autoplay speed to 3 seconds
  };

  return (
    <div className="relative">
      <Slider {...settings} style={{ marginBottom: '-10px', overflow: 'hidden'}}>
        <div>
          <img
            src="/assets/Pack_Art/Forest_Textures_01_ART_Square.png"
            alt="Featured item 1"
            style={{ maxWidth: '100%', height: '100%', width: '100%', maxHeight: '600px', objectFit: 'cover'}}
            />
        </div>
        <div>
          <img
            src="/assets/Pack_Art/Forest_Textures_01_ART_Square.png"
            alt="Featured item 2"
            style={{ maxWidth: '100%', height: '100%', width: '100%', maxHeight: '600px', objectFit: 'cover'}}
          />
        </div>
        <div>
          <img
            src="/assets/Pack_Art/Forest_Textures_01_ART_Square.png"
            alt="Featured item 3"
            style={{ maxWidth: '100%', height: '100%', width: '100%', maxHeight: '600px', objectFit: 'cover'}}
          />
        </div>
      </Slider>
    </div>
  );
};

export default ItemSlider;
