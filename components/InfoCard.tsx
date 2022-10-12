import React from 'react';
import style from '../styles/InfoCard.module.scss';

interface Props {
  title?: string;
  content?: string;
  img?: JSX.Element;
}

const InfoCard = ({ title, content, img }: Props) => {
  return (
    <div className={style.container}>
      {img && <div className={style.image}>{img}</div>}
      <h2 className={style.title}>{title?.toUpperCase()}</h2>
      <p className={style.content}>{content?.toUpperCase()}</p>
    </div>
  );
};

export default React.memo(InfoCard);
