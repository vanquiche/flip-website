import React from 'react';
import style from '../styles/InfoCard.module.scss';
import { IoStatsChart, IoCopy, IoDiamond } from 'react-icons/io5';
import { MdFolderSpecial } from 'react-icons/md';
import { AiFillShopping } from 'react-icons/ai';

const legend: Record<string, JSX.Element> = {
  stats: <IoStatsChart size={50} />,
  squares: <IoCopy size={50} />,
  folders: <MdFolderSpecial size={50} />,
  shop: <AiFillShopping size={50} />,
  diamond: <IoDiamond size={50} />,
};

interface Props {
  title?: string;
  content?: string;
  img?: string;
}

const InfoCard = ({ title, content, img }: Props) => {
  return (
    <div className={style.container}>
      {img && img in legend && <div className={style.image}>{legend[img]}</div>}
      <h2 className={style.title}>{title?.toUpperCase()}</h2>
      <p className={style.content}>{content?.toUpperCase()}</p>
    </div>
  );
};

export default React.memo(InfoCard);
