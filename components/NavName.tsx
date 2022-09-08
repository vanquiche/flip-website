import React, { useState } from 'react';
import style from '../styles/SideNav.module.scss';

interface Props {
  name: string;
}

const NavName = ({ name }: Props) => {
  const [hover, setHover] = useState(false);

  const handleHover = (state: boolean) => () => {
    setHover(state);
  };

  const hide = {
    opacity: 0,
  };
  const show = {
    opacity: 1,
  };

  return (
    <div
      onMouseOver={handleHover(true)}
      onMouseLeave={handleHover(false)}
      style={{ height: '100%', width: '100%' }}
    >
      <p className={style.linkName} style={hover ? show : hide}>
        {name.toUpperCase()}
      </p>
    </div>
  );
};

export default NavName;
