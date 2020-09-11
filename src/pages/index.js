import React from 'react';
import Layout from '../components/Layout';

require("typeface-rubik-mono-one");
require("typeface-carrois-gothic-sc");
require("typeface-montserrat");

const Home = ({data}) => (
  <Layout>
    <h1>K-kaaawmics</h1>
    <p>Welcome to k-kaaawmics. Original art and stories every week.</p>
    
    <section>
      <h2>Latest Comics</h2>
      <p>Read our latest exciting comics.</p>
    </section>

    <section>
      <h2>K-kaaawmics Blog</h2>
      <p>
        Find out what's going on in the life of our artists and read about the next thing to come
        from K-kaaawmics.
      </p>
    </section>
  </Layout>
)

export default Home;

