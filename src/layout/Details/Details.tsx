/* eslint-disable @next/next/no-img-element */
'use client'
import Button from '@/components/Button/Button'
import PlusButton from '@/components/PlusButton/PlusButton'
import React, {  useState } from 'react'
import classes from './index.module.scss'
import '../../app/globals.css'

const Details = () => {
  const prod1 = {
    position: 'Front',
    description: 'A singular piece of three-dimensionally formed laminated glass flows into an aluminum alloy frame that gently curves to wrap around your face.',
    image: '/assets/images/Apple-Vision-Pro_01.jpg'
  }
  const prod2 = {
    position: 'Cameras e Sensors',
    description: 'An array of advanced cameras and sensors work together to let you see the world clearly, understand your environment, and detect hand input.',
    image: '/assets/images/Apple-Vision-Pro_02.jpg'
  }
  const prod3 = {
    position: 'Audio Straps',
    description: 'Speakers are positioned close to your ears, delivering rich Spatial Audio that seamlessly blends with real-world sounds. Two head bands are included. The Solo Knit Band provides cushioning, breathability, and stretch, and a Fit Dial lets you adjust Apple Vision Pro to your head. The Dual Loop Band features a pair of adjust',
    image: '/assets/images/Apple-Vision-Pro_05.jpg'
  }
  const prod4 = {
    position: 'Head Bands',
    description: 'Two head bands are included. The Solo Knit Band provides cushioning, breathability, and stretch, and a Fit Dial lets you adjust Apple Vision Pro to your head. The Dual Loop Band features a pair of adjustable upper and lower straps for a precise fit.',
    image: '/assets/images/Apple-Vision-Pro_03.jpg'
  }
  const prod5 = {
    position: 'Power',
    description: 'The external battery supports up to 2 hours of general use and up to 2.5 hours of video playback.1',
    image: '/assets/images/Apple-Vision-Pro_04.jpg'
  }

  const [prod, setProd] = useState(prod1)

  const trocarProdutos = () => {
    if (prod.image === prod1.image) {
      setProd(prod2)
    } else {
      setProd(prod1)
    }
  }
  
  return (
    
    <div className={classes.details}>
      <div className={classes.imageContainer}>
        <div className={classes.btnContainerA}>
          <PlusButton onClick={() => setProd(prod3)} />
          <PlusButton onClick={trocarProdutos} />
        </div>
        <div className={classes.btnContainerB}>
          <PlusButton onClick={() => setProd(prod4)} />
          <PlusButton onClick={() => setProd(prod5)} />
        </div>
        
        
        <img className={classes.imagem} alt={prod.position} src={prod.image} />
      </div>
      <h1 className='font-bold text-xl m-10'>{prod.position}</h1>
      <p className={classes.detailsText}>{prod.description}</p>
      <div className={classes.button}><Button variant='secondary' href='/' title='Learn more about design' /></div>
    </div>
    
  )
}



export default Details