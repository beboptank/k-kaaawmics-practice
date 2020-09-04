import React from 'react';
import PropTypes from 'prop-types';

import Nav from './Nav';

import './layout.css';

const Layout = ({ children }) => (
    <>
        <Nav />
        <main className="main">{ children }</main>
        <footer>
            © {new Date().getFullYear()}, Built with
                {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a> and {" "}
            <a href="http://strapi.io">Strapi</a>
        </footer>
    </>
);

Layout.propTypes = {
    children: PropTypes.node.isRequired
};

export default Layout;