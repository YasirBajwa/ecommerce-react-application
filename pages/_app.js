import React from 'react'
import '../styles/globals.css';

import Layout from '../components/Layout';
import { stateContext } from '../context/StateContext';

function MyApp({ Component, pageProps }) {
  return (
     <stateContext>

     <Layout>
        <Component {...pageProps} />
     </Layout>
     
     </stateContext>
  
  )
}

export default MyApp
