import React from 'react'

import Header from '../components/header'
import Footer from '../components/footer'
import GlobalStyles from "../shared/globalStyles";
import '../styles/main.scss'


const Layout = (props) => {
    return (
        <>
            <GlobalStyles />
            <Header />
            {props.children}
            <Footer />
        </>
    )
}

export default Layout