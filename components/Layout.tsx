import React, { ReactElement, useContext } from 'react';
import style from '../styles/layout.module.scss';
import { InView } from 'react-intersection-observer';
import LocationContext from '../context/LocationContext';

interface Props {
  children?: ReactElement;
  color?: string;
  title?: string;
}

const Layout = ({ children, color, title }: Props) => {
  const { setLocation } = useContext(LocationContext);
  const sectionId = title ? title.toLowerCase().replaceAll(' ', '-') : '';

  return (
    <InView
      as='div'
      onChange={(inView, entry) =>
        inView && setLocation(entry.target.attributes[0].value)
      }
      threshold={.15}
      data-location={sectionId}
    >
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
          {title && title !== 'home' && (
            <span className={style.titleWrapper}>
              <h4 className={style.title}>{title.toUpperCase()}</h4>
            </span>
          )}
          {children}
        </section>
      </div>
    </InView>
  );
};

export default Layout;
