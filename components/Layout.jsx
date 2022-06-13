import React from 'react';
import Head from 'next/head';
import  Navbar  from './Navbar';
import  Footer from './Footer';




const Layout = ({children}) => {
  console.log(children)
  return (
    <div className='layout'>
       <Head>
         <title>Ecoomerece Application</title>
       </Head>
       <header>
         <Navbar/>
       </header>
       <main className='main-container'>
           Empty
       </main>

       <footer>
         <Footer/>
       </footer>
    </div>
  )
}

export default Layout;