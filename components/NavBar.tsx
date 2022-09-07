import React from 'react';
import Link from 'next/link';
import style from '../styles/NavBar.module.scss';
import Image from 'next/image';

type LinkType = { name: string; path: string; icon?: string; alt?: string };

interface Props {
  links: LinkType[];
}

const NavBar = ({ links }: Props) => {
  return (
    <header>
      <nav className={style.container} aria-label='Main'>
        {links.map((link, i) => (
          <div className={style.linkItem} key={i}>
            {link.icon && (
              <span style={{ alignSelf: 'center' }}>
                <Image
                  width={'50px'}
                  height={'50px'}
                  src={link.icon}
                  alt={link.alt}
                  className={style.linkImage}
                />
              </span>
            )}
            <Link href={link.path}>
              <a aria-label={`navigate to ${link.name}`}>
                {link.name.toUpperCase()}
              </a>
            </Link>
          </div>
        ))}
      </nav>
    </header>
  );
};

export default NavBar;
