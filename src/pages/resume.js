import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';

const Resume = () => (
  <Layout>
    <SEO title="Resume" />
    <h2>Resume</h2>
    <p>
      I am currently gainfully employed, but my (outdated) resume is available
      for reference.
    </p>
    <a
      href="http://www.pavelrozvora.com/static/Pavel_Rozvora_Resume.pdf"
      target="_blank"
      rel="noopener noreferrer"
    >
      {' '}
      Resume [PDF]
    </a>
  </Layout>
);

export default Resume;
