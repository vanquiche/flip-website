import Image from 'next/image';
import React, { useRef } from 'react';
import style from '../styles/ScrollButton.module.scss';
import { Transition } from 'react-transition-group';

interface Props {
  onClick: () => void;
  visible: boolean;
}
const ScrollButton = ({ onClick, visible }: Props) => {
  const nodeRef = useRef(null);

  function handleClick() {
    onClick();
  }

  const duration = 300;
  const defaultStyle = {
    transition: `opacity ${duration}ms linear`,
    opacity: 0,
  };

  const transitionStyles: any = {
    entering: { opacity: 1 },
    entered: { opacity: 1 },
    exiting: { opacity: 0 },
    exited: { opacity: 0 },
  };

  return (
    <Transition in={visible} timeout={duration} nodeRef={nodeRef}>
      {(state) => (
        <button
          className={style.container}
          onClick={handleClick}
          style={{
            ...defaultStyle,
            ...transitionStyles[state],
          }}
        >
          <div className={style.imgWrapper}>
            <Image
              src={require('../public/images/up-arrow.png')}
              alt='up arrow'
            />
          </div>
        </button>
      )}
    </Transition>
  );
};

export default ScrollButton;
