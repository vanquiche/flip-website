import Image from 'next/image';
import React from 'react';
import style from '../styles/ScrollButton.module.scss';

interface Props {
  onClick: () => void;
}
const ScrollButton = ({ onClick }: Props) => {
  function handleClick() {
    onClick();
  }
  return (
    <button className={style.container} onClick={handleClick}>
      <div className={style.imgWrapper}>
        <Image src={require('../public/images/up-arrow.png')} />
      </div>
    </button>
  );
};

export default ScrollButton;
