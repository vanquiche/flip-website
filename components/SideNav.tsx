import Link from 'next/link';
import React, { useContext } from 'react';
import LocationContext from '../context/LocationContext';
import style from '../styles/SideNav.module.scss';
import NavName from './NavName';

type LinkType = {
  path: string;
  name: string;
};
interface Props {
  links: LinkType[];
}

const SideNav = ({ links }: Props) => {
  const { location } = useContext(LocationContext);

  return (
    <nav className={style.container}>
      {links.map((link, i) => {
        return (
          <Link href={link.path} key={i}>
            <a
              aria-label={link.name}
              className={style.navItem}
              style={{
                backgroundColor:
                  location === link.path.replace('#', '') ? 'white' : '',
              }}
            >
              <NavName name={link.name} />
            </a>
          </Link>
        );
      })}
    </nav>
  );
};

export default SideNav;
