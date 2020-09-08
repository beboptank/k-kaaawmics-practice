import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faInstagramSquare, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';

import Nav from './Nav';

import './layout.css';

const Layout = ({ children }) => (
  <>
    <Nav />
    <main className="main">{children}</main>
    <footer className="footer">
      <div>
        <p className="footertext">
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a> and{" "}
          <a href="http://strapi.io">Strapi</a>
        </p>
      </div>
      <div>
        <FontAwesomeIcon className="fontawesomefooter" icon={faFacebookSquare} />
        <FontAwesomeIcon className="fontawesomefooter" icon={faInstagramSquare} />
        <FontAwesomeIcon className="fontawesomefooter" icon={faTwitterSquare} />
      </div>
    </footer>
  </>
)

Layout.propTypes = {
    children: PropTypes.node.isRequired
};

export default Layout;