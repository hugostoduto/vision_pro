/* eslint-disable @next/next/no-img-element */
import React, { ReactNode } from 'react'
import Image from '../../../node_modules/next/image'
import classes from './index.module.scss'


const RoundButton = ({ onClick,icon }:{onClick:()=> void, icon: ReactNode} ) => {
   
  
  return (
    <button onClick={onClick} className={classes.plusBtn} >
      {icon}
    </button>
  )
}

export default RoundButton