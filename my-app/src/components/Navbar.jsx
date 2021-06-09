import React, {useState} from 'react';
import style from './Navbar.module.scss'
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars, faMapMarked, faTimes} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const logoIcon = <FontAwesomeIcon icon={faMapMarked}/>
  const timesIcon = <FontAwesomeIcon icon={faTimes}/>
  const barsIcon = <FontAwesomeIcon icon={faBars}/>

  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)


  return (
    <>
      <nav className={style.navbar}>
        <div className={style.navbar__container}>
          <Link to="/" className={style.navbar__logo}>
            TRVL {logoIcon}
          </Link>
          <div className={style.menu__icon} onClick={handleClick}>
            {click ? timesIcon : barsIcon}
          </div>
          <ul className={click ? style.nav__menu + style.active : style.nav__menu}>
            <li className={style.nav__item}>
              <Link to='/' className={style.nav__links} onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className={style.nav__item}>
              <Link to='/services' className={style.nav__links} onClick={closeMobileMenu}>
                Services
              </Link>
            </li>
            <li className={style.nav__item}>
              <Link to='/products' className={style.nav__links} onClick={closeMobileMenu}>
                Products
              </Link>
            </li>
            <li className={style.nav__item}>
              <Link to='/sign-up' className={style.nav__links_mobile} onClick={closeMobileMenu}>
                Sign-Up
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
