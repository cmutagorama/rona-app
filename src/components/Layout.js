import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";

import "assets/stylesheets/application.scss";

import Header from "components/Header";

const Layout = ({ children, pageName }) => {
  let className = "";

  if (pageName) {
    className = `${className} page-${pageName}`;
  }

  return (
    <>
      <Helmet bodyAttributes={{ class: className }}>
        <title>Rona App</title>
      </Helmet>
      <div className="wrapper">
        <Header />
        <main className="main-container">{children}</main>
        {/* <Footer /> */}
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  pageName: PropTypes.string,
};

export default Layout;
