import React from "react";
import styles from "../Navbar/Navbar.module.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className={styles.nav}>
        <img
          className={styles.img}
          src={process.env.PUBLIC_URL + "/user.png"}
          alt="ikona"
        />

        <ul className={styles.ulLinks}>
          <NavLink to="/">
            <li className={styles.li}>Home</li>
          </NavLink>
          <NavLink to="/about">
            <li className={styles.li}>About</li>
          </NavLink>
          <NavLink to="/contact">
            <li className={styles.li}>Contact</li>
          </NavLink>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;

/*
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
const Navbar = () => {
  const links = [
    {
      id: 1,
      path: "/",
      text: "Home",
    },
    {
      id: 2,
      path: "/about",
      text: "About",
    },
    {
      id: 3,
      path: "/contact",
      text: "Contact",
    },
  ];

  return (
    <>
      <nav className={styles.nav}>
        <img
          className={styles.img}
          src={process.env.PUBLIC_URL + "/user.png"}
          alt="ikona"
        />

        <ul className={styles.ulLinks}>
          {links.map((link) => {
            return (
              <>
                <li /*className={styles.li} key={link.id}>
                  <NavLink to={link.path} activeClassName="active-link" exact>
                    {link.text}
                  </NavLink>
                </li>
              </>
            );
          })}
        </ul>
      </nav>
    </>
  );
};
export default Navbar;
*/
