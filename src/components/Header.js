import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Header.css';
import imageLogo from '../image/logo.png';

class Header extends Component {
  render() {
    return (
      <div id="header" className="header headerLinks">
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-md-2 col-4 px-2 px-md-0 text-center">
              <Link to="/">
                <img src={imageLogo} alt="logo" />
              </Link>
            </div>
            <div className="col-md-4 text-center col-8">
              <div className="input-group flex-nowrap">
                <input type="text" className="form-control" placeholder="search" aria-label="Username" aria-describedby="addon-wrapping" />
                <div className="input-group-prepend">
                  <button className="input-group-text" id="addon-wrapping">
                    <i className="fas fa-search"></i>
                  </button>
                </div>
              </div>
            </div>
            <div className="links col-12 col-md-6 d-flex justify-content-around">
              <Link to="/">
                <div title="Home" className="link1">
                  <i className="fas fa-user-alt"></i>
                </div>
              </Link>
              <Link to="/chats/AliSamer">
                <div title="Chats" className="link2">
                  <i className="fas fa-comment-alt"></i>
                </div>
              </Link>
              <Link to="/videos">
                <div title="Videos" className="link3">
                  <i className="fas fa-film"></i>
                </div>
              </Link>
              <Link to="/games">
                <div title="Games" className="link4">
                  <i className="fas fa-gamepad"></i>
                </div>
              </Link>
              {/* <Link to="/"> */}
                <div title="Sign out" className="link6">
                  <i className="fas fa-sign-out-alt"></i>
                </div>
              {/* </Link> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;