import React from 'react';
import style from '../styles/NavBar.module.scss';

type LinkType = {
  name: string;
  path: string;
  icon: JSX.Element;
};

interface Props {
  links: LinkType[];
}

const NavBar = ({ links }: Props) => {

  const navigateToSection = (id: string) => () => {
    const title = id.replace('#', '');
    const section = document.getElementById(title);
    if (section) {
      section.scrollIntoView({
        block: 'start',
        behavior: 'smooth',
      });
    }
  };

  return (
    <header>
      <nav className={style.container} aria-label='Main'>
        {links.map((link, i) => (
          <div className={style.linkItem} key={i}>
            <button onClick={navigateToSection(link.path)} aria-label={`navigate to ${link.name} section`}>
              <span className={style.icon}>{link.icon}</span>
              <span className={style.linkText}>{link.name.toUpperCase()}</span>
            </button>
          </div>
        ))}
      </nav>
    </header>
  );
};

export default NavBar;
