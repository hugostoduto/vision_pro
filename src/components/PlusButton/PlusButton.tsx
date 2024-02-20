/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Image from '../../../node_modules/next/image'

import icon from '../../../public/assets/icons/plus.png'


import classes from './index.module.scss'


const PlusButton = ({ onClick }:{onClick:()=> void} ) => {
   
  
  return (
    <button onClick={onClick} className={classes.plusBtn} >
      <Image width={10} height={10} alt='plus Icon' src={icon}/>
    </button>
  )
}

export default PlusButton