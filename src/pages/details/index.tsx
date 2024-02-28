// DetailsPage.js
import React, { Suspense, useState } from 'react';
import Loading from '@/components/Loader';
import Design from '@/layout/Design/Design';
import Details from '@/layout/Details/Details';
import styles from './index.module.scss';

export default function DetailsPage() {
  const [isHidden, setIsHidden] = useState(true);

  const showDiv = () => {
    setIsHidden(false);
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' }); // Rolando para baixo quando a div é aberta
  };

  const hideDiv = () => {
    setIsHidden(true);
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Rolando para cima quando a div é fechada
  };

  return (
    <Suspense fallback={<Loading />}>
      <Details onClick={isHidden ? showDiv : hideDiv} />

      <div className={`${styles.designContainer} ${isHidden ? '' : styles.visible}`}>
        <Design closeTab={hideDiv} />
      </div>
    </Suspense>
  );
}
