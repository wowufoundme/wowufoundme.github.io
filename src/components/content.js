import React from 'react';

const Content = () => {
  return (
    <div>
      <p className="intro-para">
        Hello, <br />
        I'm Shubhkirti, a full-stack developer living in Chandigarh.
      </p>
      <p className="description-para">
        I am currently redesigning my portfolio, till then you can checkout my old one{' '}
        <a
          href="https://shubhkirtisharma.gitlab.io/home/"
          target="_blank"
          rel="noopener noreferrer"
          className="link-website">
          here
        </a>
      </p>
    </div>
  );
};

export default Content;
