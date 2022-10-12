import React, { ReactElement } from 'react';
import style from '../styles/layout.module.scss';


interface Props {
  children?: ReactElement;
  color?: string;
  title?: string;
}

const Layout = ({ children, color, title }: Props) => {
  const sectionId = title ? title.toLowerCase().replaceAll(' ', '-') : '';

  return (
    <section
      id={sectionId}
      className={style.container}
      style={{ backgroundColor: color }}
      role='contentinfo'
      aria-label={title}
    >
      <div className={style.childContainer}>
        {title && title !== 'home' && (
          <span className={style.titleWrapper}>
            <h1 className={style.title}>{title.toUpperCase()}</h1>
          </span>
        )}
        {children}
      </div>
    </section>
  );
};

export default Layout;
