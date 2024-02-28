import React, { useState, useRef } from 'react';
import PlusButton from '@/components/PlusButton/PlusButton';
import classes from './index.module.scss';
import RoundButton from '@/components/RoundButton/RoundButton';
import { IoIosArrowBack, IoIosArrowForward, IoIosClose } from 'react-icons/io';
import DesignCard from '@/components/DesignCard/DesignCard';
import Button from '@/components/Button/Button';

const Design = ({ closeTab }: { closeTab: () => void }) => {
  const products = [
    {
      position: 'Front',
      description: 'The Light Seal magnetically attaches to the aluminum alloy frame. It gently flexes to conform to individual face shapes.',
      image: '/assets/images/small1.mp4'
    },
    {
      position: 'Cameras e Sensors',
      description: 'The Solo Knit Band is 3D knitted, creating a unique rib structure that provides cushioning, breathability, and stretch.',
      image: '/assets/images/small2.mp4'
    },
    {
      position: 'Audio Straps',
      description: 'ZEISS Optical Inserts can be customized with your vision prescription,2 magnetically attaching to the lenses for precise viewing and eye tracking.',
      image: '/assets/images/small3.mp4'
    },

  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const nextProduct = () => {
    setCurrentIndex(prevIndex => (prevIndex === products.length - 1 ? 0 : prevIndex + 1));
    scrollToItem();
  };

  const prevProduct = () => {
    setCurrentIndex(prevIndex => (prevIndex === 0 ? products.length - 1 : prevIndex - 1));
    scrollToItem();
  };

  const scrollToItem = () => {
    if (containerRef.current) {
      containerRef.current.children[currentIndex].scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  };

  const currentProduct = products[currentIndex];

  return (
    <div className={classes.details}>
      <div className={classes.productContainer} ref={containerRef}>
        {products.map((prod, index) => (
          <div key={index} className={classes.productItem}>
            <DesignCard product={prod} />
          </div>
        ))}

      </div>
      <div className={classes.buttons}>
        <RoundButton icon={<IoIosClose size={20} color='#68686C' />} onClick={closeTab} />
        <div className={classes.controlsBtn}>
          <RoundButton icon={<IoIosArrowBack size={20} color='#68686C' />} onClick={prevProduct} />
          <RoundButton icon={<IoIosArrowForward size={20} color='#68686C' />} onClick={nextProduct} />
        </div>
      </div>
      <div style={{
        position: 'absolute',
        bottom: '25px'
      }} ><Button variant='buy' href='https://www.apple.com/shop/buy-vision/apple-vision-pro' title='Buy' /></div>
    </div>
  );
};

export default Design;
