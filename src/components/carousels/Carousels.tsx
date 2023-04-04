import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './Carousels.css'

const items = [
    <img  src="https://i.pinimg.com/originals/8e/9b/c1/8e9bc1083287202850662bec99443487.png" className='vida1' role="presentation" />,
    <img  src="https://i.pinimg.com/originals/6b/b3/2f/6bb32fcb382ed04f42760bcdd8326fd7.png" className='vida1' role="presentation" />,
    <img  src="https://i.pinimg.com/originals/fa/bd/75/fabd75e52eca625f035f383718df4f49.png" className='vida1' role="presentation" />,
    <img  src="https://i.pinimg.com/originals/8d/49/2d/8d492db669146d694e185cefd7aa1f80.png" className='vida1' role="presentation" />,
  ];

function Carousels() {
  return (
    <AliceCarousel
    autoPlay
    autoPlayStrategy="default"
    autoPlayInterval={1000}
    animationDuration={2000}
    animationType="fadeout"
    infinite
    touchTracking={false}
    disableDotsControls
    disableButtonsControls
    items={items}
/>
  )
}

export default Carousels
