import React from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
  render() {
    return (
          <ul className={styles.nav}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/cards">Carts</Link>
            </li>
            <li>
              <Link to="/charts">Charts</Link>
            </li>
            <li>
              <a href="https://github.com/tdelga/Goronavirus">Github</a>
            </li>
          </ul>
    );
  }
}

export default Navbar;
