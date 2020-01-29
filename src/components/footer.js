import React from 'react';

import '../styles/app.scss';

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <ul className="footer-container">
          <li>
            <a href="https://github.com/wowufoundme" className="social-link">
              Github
            </a>
          </li>
          <li>
            <a href="https://dribbble.com/Shubhkirti" className="social-link">
              Dribbble
            </a>
          </li>
          <li>
            <a href="https://twitter.com/shubhkirti_here" className="social-link">
              Twitter
            </a>
          </li>
          <li>
            <a href="mailto:shubhkirti.work@gmail.com" className="social-link">
              Mail
            </a>
          </li>
        </ul>
      </div>
      <h4 className="end">
        Made with <span className="heart">❤</span> by Shubhkirti Sharma with{' '}
        <a href="https://www.gatsbyjs.org/" className="gatsby">
          GatsbyJS
        </a>
      </h4>
    </footer>
  );
};

export default Footer;
