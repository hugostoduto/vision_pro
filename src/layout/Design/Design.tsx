/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import PlusButton from '@/components/PlusButton/PlusButton';
import classes from './index.module.scss';
import '../../app/globals.css';
import RoundButton from '@/components/RoundButton/RoundButton';
import { IoIosArrowBack, IoIosArrowForward, IoIosClose } from 'react-icons/io';

const Design = ({ closeTab }: { closeTab: () => void }) => {
  const products = [
    {
      position: 'Front',
      description: 'A singular piece of three-dimensionally formed laminated glass flows into an aluminum alloy frame that gently curves to wrap around your face.',
      image: '/assets/images/Apple-Vision-Pro_01.jpg'
    },
    {
      position: 'Cameras e Sensors',
      description: 'An array of advanced cameras and sensors work together to let you see the world clearly, understand your environment, and detect hand input.',
      image: '/assets/images/Apple-Vision-Pro_02.jpg'
    },
    {
      position: 'Audio Straps',
      description: 'Speakers are positioned close to your ears, delivering rich Spatial Audio that seamlessly blends with real-world sounds. Two head bands are included. The Solo Knit Band provides cushioning, breathability, and stretch, and a Fit Dial lets you adjust Apple Vision Pro to your head. The Dual Loop Band features a pair of adjust',
      image: '/assets/images/Apple-Vision-Pro_05.jpg'
    },
    {
      position: 'Head Bands',
      description: 'Two head bands are included. The Solo Knit Band provides cushioning, breathability, and stretch, and a Fit Dial lets you adjust Apple Vision Pro to your head. The Dual Loop Band features a pair of adjustable upper and lower straps for a precise fit.',
      image: '/assets/images/Apple-Vision-Pro_03.jpg'
    },
    {
      position: 'Power',
      description: 'The external battery supports up to 2 hours of general use and up to 2.5 hours of video playback.1',
      image: '/assets/images/Apple-Vision-Pro_04.jpg'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProduct = () => {
    setCurrentIndex((prevIndex) => (prevIndex === products.length - 1 ? 0 : prevIndex + 1));
  };

  const prevProduct = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? products.length - 1 : prevIndex - 1));
  };

  const currentProduct = products[currentIndex];

  return (
    <div className={classes.details}>

      <div className={classes.closeBtn}>
        <RoundButton icon={<IoIosClose size={30} color='#68686C' />} onClick={closeTab} />
      </div>
      <div className={classes.imageContainer}>
        <img className={classes.imagem} alt={currentProduct.position} src={currentProduct.image} />
      </div>
      <div className={classes.button}>
        <RoundButton icon={<IoIosArrowBack size={23} color='#68686C' />} onClick={prevProduct} />
        <RoundButton icon={<IoIosArrowForward size={23} color='#68686C' />} onClick={nextProduct} />

      </div>

      <p className={classes.detailsText}>{currentProduct.description}</p>

    </div>
  );
};

export default Design;
