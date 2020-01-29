import React from 'react';
import Layout from '../components/layout';
import Content from '../components/content';
import { Helmet } from 'react-helmet';

import '../styles/app.scss';

const IndexPage = () => {
  return (
    <Layout>
      <Helmet defer={false}>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1"
        />
        ><title>Shubhkirti Sharma</title>
      </Helmet>
      <Content />
    </Layout>
  );
};

export default IndexPage;
