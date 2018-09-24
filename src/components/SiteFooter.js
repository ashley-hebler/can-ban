import React from 'react';
import { Link } from 'react-router-dom';

class SiteFooter extends React.Component {
  render() {
    return (
      <footer className="site-footer">
        <div className="site-footer__inner container">
          &copy; 2018 isthereacanban.com | <Link to="/about">Contact</Link>
        </div>
      </footer>
    );
  }
}

export default SiteFooter;
