import Link from 'next/link';
import React, { useContext } from 'react';
import LocationContext from '../context/LocationContext';
import style from '../styles/SideNav.module.scss';
import NavName from './NavName';
import { useMediaQuery } from 'react-responsive';


type LinkType = {
  path: string;
  name: string;
};
interface Props {
  links: LinkType[];
}

const SideNav = ({ links }: Props) => {
  const { location } = useContext(LocationContext);
  const isMobile = useMediaQuery({ query: '(max-width: 450px)' });

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
              {!isMobile && <NavName name={link.name} />}
            </a>
          </Link>
        );
      })}
    </nav>
  );
};

export default SideNav;
