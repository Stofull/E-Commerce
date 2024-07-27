import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const CarouselSection = () => {
  return (
    <div className="w-full">
      <Carousel
        showThumbs={false}
        autoPlay
        infiniteLoop
        interval={3000} // Интервал прокрутки в миллисекундах
        showStatus={false} // Скрыть индикатор статуса
        showIndicators={false} // Скрыть индикаторы
        stopOnHover={false} // Не останавливаться при наведении
      >
        {/*TODO
        АДАПТИРОВАТЬ ВСЕ ФОТКИ В ПРОЕКТЕ
        */}
        <div className="h-64">
          <img className="object-cover h-full w-full" src="https://i.imgur.com/gxLdYWO.jpeg" alt="Slide 1" />
        </div>
        <div className="h-64">
          <img className="object-cover h-full w-full" src="https://i.imgur.com/L0jLmsE.jpeg" alt="Slide 2" />
        </div>
        <div className="h-64">
          <img className="object-cover h-full w-full" src="https://i.imgur.com/7k9udjT.jpeg" alt="Slide 3" />
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselSection;
