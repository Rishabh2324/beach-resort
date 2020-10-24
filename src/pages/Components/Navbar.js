import React, { Component } from "react";
import logo from "../../images/logo.svg";
import { FaAlignRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import links from "./navlinks";
class Navbar extends Component {
  //toggle state
  state = {
    isOpen: false
  };
  //handle toggle state
  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  //Navbar links
  navbarListItems = links.map((link) => 
    <li key={link.id}>
        <Link to={link.path}>{link.name}</Link>
      </li>
    )
  render() {
    return (
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <Link to="/">
              <img src={logo} alt="Beach Resort" />
            </Link>
            <button
              type="button"
              className="nav-btn"
              onClick={this.handleToggle}
            >
              <FaAlignRight className="nav-icon" />
            </button>
          </div>
          <ul
            className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}
          >{this.navbarListItems}
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
