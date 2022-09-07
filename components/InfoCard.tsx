import React from 'react';
import style from '../styles/InfoCard.module.scss';
import Image from 'next/image';

interface Props {
  title?: string;
  content?: string;
  img?: any;
  alt?: string;
  color?: string;
}

const InfoCard = ({ title, content, img, alt, color }: Props) => {
  return (
    <div className={style.container}>
      {img && (
        <div className={style.image}>
          <Image src={img} alt={alt} />
        </div>
      )}
      <h6 className={style.title}>{title?.toUpperCase()}</h6>
      <p className={style.content}>{content?.toUpperCase()}</p>
    </div>
  );
};

export default React.memo(InfoCard);
