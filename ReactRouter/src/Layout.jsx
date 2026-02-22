import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router' // jha outlet hoga vo chiz change hogi baki same rehgi


export default function Layout(){
    return (
        <>
        <Header />
         <Outlet />
         <Footer />
         </>
    )
}