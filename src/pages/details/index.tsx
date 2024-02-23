// DetailsPage.js
import React, { Suspense, useState } from 'react';
import Loading from '@/components/Loader';
import Design from '@/layout/Design/Design';
import Details from '@/layout/Details/Details';
import styles from './index.module.scss';

export default function DetailsPage() {
  const [isHidden, setIsHidden] = useState(true);

  const toggleHidden = () => {
    setIsHidden(!isHidden);
    if (!isHidden) {
      window.scrollTo({ top: 0, behavior: 'smooth' }); // Rolando para cima quando a div é fechada
    } else {
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' }); // Rolando para baixo quando a div é aberta
    }
  };

  return (
    <Suspense fallback={<Loading />}>
      <Details onClick={toggleHidden}/>
      
      <div className={`${styles.designContainer} ${isHidden ? '' : styles.visible}`}>
        <Design closeTab={toggleHidden} />
      </div>
    </Suspense>
  );
}
