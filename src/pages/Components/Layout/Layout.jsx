import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Layout = ({children}) => {
    return (
        <div>
            
           <Header/>
           <main>
               <h2>{children}</h2>
            </main>
            <Footer/>
        </div>
    )
}

export default Layout
