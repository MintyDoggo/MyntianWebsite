import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const FeaturedItem = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 250,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true, // enable autoplay
    // autoplaySpeed: 5000, // set autoplay speed to 3 seconds
  };

  return (
    <div className="relative">
      <Slider {...settings}>
        <div>
          <iframe
            src="https://www.youtube.com/embed/BBAT9edDjWs"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ border: 'none', width: '100%', height: 'calc(100vh - 256px)' }}
          ></iframe>
        </div>
        <div>
          <img
            src="/assets/dog.png"
            alt="Featured item 1"
            style={{ maxwidth: '100%', height: 'calc(100vh - 256px)' }}
          />
        </div>
        <div>
          <img
            src="/assets/dog.png"
            alt="Featured item 2"
            style={{ maxwidth: '100%', height: 'calc(100vh - 256px)' }}
          />
        </div>
        <div>
          <img
            src="/assets/dog.png"
            alt="Featured item 3"
            style={{ maxwidth: '100%', height: 'calc(100vh - 256px)' }}
          />
        </div>
      </Slider>

      <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
        <button className="bg-gray-500 hover:bg-gray-600 text-white rounded-full h-10 w-10 flex items-center justify-center focus:outline-none">

        </button>
        <button className="bg-gray-500 hover:bg-gray-600 text-white rounded-full h-10 w-10 flex items-center justify-center focus:outline-none ml-2">

        </button>
      </div>
    </div>
  );
};

export default FeaturedItem;
