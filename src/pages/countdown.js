import React from 'react';

import Layout from '../components/layout';
import Timer from '../components/timer';
import SEO from '../components/seo';

const Countdown = () => (
  <Layout>
    <SEO title="Countdown" />
    <h2>How long do I have to wait?</h2>
    <Timer title="For My Doggo" endDate="2019-12-14T16:30:00" />
    <Timer title="Until 2021" endDate="2021-01-01T00:00:00" />
  </Layout>
);

export default Countdown;
