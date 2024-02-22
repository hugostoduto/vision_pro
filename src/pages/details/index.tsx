// DetailsPage.js

import React, { Suspense, useState, useRef } from 'react';
import Loading from '@/components/Loader';
import Design from '@/layout/Design/Design';
import Details from '@/layout/Details/Details';
import styles from './index.module.scss';

export default function DetailsPage() {
  const [isHidden, setIsHidden] = useState(true);
  const designRef = useRef<HTMLDivElement>(null); // Definindo o tipo da referência

  const toggleHidden = () => {
    setIsHidden(!isHidden);
    if (!isHidden && designRef.current) {
      designRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Suspense fallback={<Loading />}>
      <Details onClick={toggleHidden}/>
      
      <div ref={designRef} className={isHidden ? styles.hidden : styles.visible}>
        <Design closeTab={toggleHidden} />
      </div>
    </Suspense>
  );
}
