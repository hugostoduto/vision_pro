/* eslint-disable @next/next/no-img-element */
import Button from '@/components/Button/Button'
import React from 'react'
import Image from '../../../node_modules/next/image'
import classes from './index.module.scss'



const details = () => {
  return (
    <div className={classes.details}>
      <div className={classes.imageConatiner}>
        <div></div>
        <img  alt='Apple-Vision-Pro_01.jpg' src='/assets/images/Apple-Vision-Pro_01.jpg'/>
      </div>
      <h2 >front</h2>
      <p className={classes.detailsText}>A singular piece of three-dimensionally formed laminated glass flows into an aluminum alloy frame that gently curves to wrap around your face.</p>
      <Button  variant='secondary' href='/' title='Learn more about design'/>
    </div>
  )
}

export default details