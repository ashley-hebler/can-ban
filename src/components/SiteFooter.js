import React from "react";
import { Link } from "react-router-dom";

class SiteFooter extends React.Component {
  render() {
    return (
      <footer className="site-footer">
        <div className="site-footer__inner container">
          &copy; 2018 isthereacanban.com
          <ul className="site-footer__list">
            <li>
              <Link to="/about">Contact</Link>
            </li>
          </ul>
        </div>
      </footer>
    );
  }
}

export default SiteFooter;
