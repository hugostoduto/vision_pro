import React from 'react'
import Link from '../../../node_modules/next/link'



import classes from './index.module.scss'


const Button = ({title, href, variant = 'primary'}:{title:string,href:string,variant:string} ) => {
   
  const styleBtn = variant === 'primary' ? classes.primary : classes.secondary;
  return (
    <Link href={href} className={styleBtn} >{title}</Link>
  )
}

export default Button