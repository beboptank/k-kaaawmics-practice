import React from 'react';
import Layout from '../components/Layout';
import { Link } from 'gatsby';
import { graphql } from 'gatsby';

require("typeface-rubik-mono-one");
require("typeface-carrois-gothic-sc");
require("typeface-montserrat");

const Home = ({data}) => (
  <Layout>
    <h1>K-kaaawmics</h1>
    <p>Welcome to k-kaaawmics. Original art and stories every week.</p>
    
    <section>
      <h2>Latest Comics</h2>
    </section>

    <section>
      <h2>K-kaaawmics Blog</h2>
    </section>
  </Layout>
)

export default Home;

