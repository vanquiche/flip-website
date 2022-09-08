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
    <div
      id={sectionId}
      className={style.container}
      style={{ backgroundColor: color }}
    >
      <section
        className={style.childContainer}
        role='contentinfo'
        aria-label={title}
      >
        {title && title !== '/' && (
          <span className={style.titleWrapper}>
            <h4 className={style.title}>{title.toUpperCase()}</h4>
          </span>
        )}
        {children}
      </section>
    </div>
  );
};

export default Layout;
