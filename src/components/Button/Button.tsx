import React from 'react';
import Link from '../../../node_modules/next/link';

import classes from './index.module.scss';

interface ButtonProps {
  title: string;
  href?: string; // Tornando o href opcional
  onClick?: () => void; // Tornando onClick opcional
  variant?: 'primary' | 'secondary'; // Definindo os valores permitidos para variant
}

const Button: React.FC<ButtonProps> = ({ title, href, onClick, variant = 'primary' }) => {
  const styleBtn = variant === 'primary' ? classes.primary : classes.secondary;
  
  // Renderiza o Link somente se o href estiver presente
  const renderLink = () => {
    if (href) {
      return (
        <Link className={`${classes.button} ${styleBtn}`} href={href} passHref>
          
            {title}
          
        </Link>
      );
    } else {
      return (
        <button className={`${classes.button} ${styleBtn}`} onClick={onClick}>
          {title}
        </button>
      );
    }
  };

  return renderLink();
};

export default Button;
