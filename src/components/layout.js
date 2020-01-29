import React from 'react';

import Header from './header';
import Footer from './footer';

import '../styles/app.scss';

const Layout = props => {
  return (
    <div className="container">
      <Header />
      {props.children}
      <Footer />
    </div>
  );
};

export default Layout;
