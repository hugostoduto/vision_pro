/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';

import classes from './index.module.scss';
import '../../app/globals.css';


const DesignCard = ({ product }: { product: string }) => {


  return (
    <div className={classes.cardContainer}>

      <div className={classes.cardImageContainer}>
        <video autoPlay muted loop src={product.image} className={classes.cardImage} />
      </div>


      <p className={classes.cardText}>{product.description}</p>

    </div>
  );
};

export default DesignCard;
