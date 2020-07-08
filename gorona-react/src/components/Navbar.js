import React from "react";
import "./Navbar.css";

class Navbar extends React.Component {
  render() {
    return (
      <div>
        <header>
          <ul id="nav">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Our Politics</a>
            </li>
            <li>
              <a href="https://github.com/tdelga/Goronavirus">Github</a>
            </li>
          </ul>
        </header>
      </div>
    );
  }
}

export default Navbar;
