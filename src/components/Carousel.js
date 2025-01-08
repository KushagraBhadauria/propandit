import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Ganu from './Ganeshji.jpg'

// Carousel Wrapper
const CarouselContainer = styled.div`
  display: flex;
  overflow: hidden;
  width: 98.vw;
  height: 90vh;
  position: relative;
`;

// Individual Slide
const Slide = styled.div`
  min-width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  transition: transform 0.5s ease-in-out;
`;

// Slide Image Styling
const slides = [
  { url: Ganu, caption: 'Welcome to PanditPro!' },
  { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/%E0%A4%AE%E0%A4%82%E0%A4%97%E0%A4%B3%E0%A4%BE%E0%A4%97%E0%A5%8C%E0%A4%B0%E0%A5%80_%E0%A4%96%E0%A5%87%E0%A4%B3_-%E0%A4%9D%E0%A4%BF%E0%A4%AE%E0%A5%8D%E0%A4%AE%E0%A4%BE.jpg/1024px-%E0%A4%AE%E0%A4%82%E0%A4%97%E0%A4%B3%E0%A4%BE%E0%A4%97%E0%A5%8C%E0%A4%B0%E0%A5%80_%E0%A4%96%E0%A5%87%E0%A4%B3_-%E0%A4%9D%E0%A4%BF%E0%A4%AE%E0%A5%8D%E0%A4%AE%E0%A4%BE.jpg', caption: 'Slide 2' },
  { url: 'https://i2.wp.com/images.indianexpress.com/2017/10/lakshmi759.jpg?w=640&ssl=1', caption: 'Slide 3' },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <CarouselContainer>
      {slides.map((slide, index) => (
        <Slide
          key={index}
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            backgroundImage: `url(${slide.url})`,
          }}
        >
          <h2 style={{ color: 'white', position: 'absolute', bottom: '20px', left: '20px' }}>{slide.caption}</h2>
        </Slide>
      ))}
    </CarouselContainer>
  );
};

export default Carousel;
