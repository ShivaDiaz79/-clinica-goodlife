import React from 'react';
import Head from 'next/head';

import Header from './Header';
import ContactWhatsapp from './ContactWhatsapp';

const Layout = ({ children, title = 'Clinica Good Life', description = 'Clinica Estetica' }) => {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/astro.favicon.ico" />
      </Head>
      <Header />
      <ContactWhatsapp/>
      
      <main style={{ flex: 1 }}>{children}</main>
     
    </div>
  );
};

export default Layout;