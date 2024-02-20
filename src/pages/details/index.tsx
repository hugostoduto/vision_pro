import Button from '@/components/Button/Button'
import PlusButton from '@/components/PlusButton/PlusButton'
import React, { useState } from 'react'
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
    position: '',
    description: 'An array of advanced cameras and sensors work together to let you see the world clearly, understand your environment, and detect hand input.',
    image: '/assets/images/Apple-Vision-Pro_05.jpg'
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
        <div className={classes.btnContainer}>
          <PlusButton onClick={() => setProd(prod3)} />
          <PlusButton onClick={trocarProdutos} />
        </div>
        
        {/* Aplicação da classe 'imagem' diretamente à imagem */}
        <img className={classes.imagem} alt={prod.position} src={prod.image} />
      </div>
      <h1 className='font-bold text-xl mb-10'>{prod.position}</h1>
      <p className={classes.detailsText}>{prod.description}</p>
      <Button variant='secondary' href='/' title='Learn more about design' />
    </div>
  )
}

export default Details
