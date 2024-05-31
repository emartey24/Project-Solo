import React from 'react'
import {Outlet, Link } from "react-router-dom"

const Layout = () => {
    return (
     
          <>
            <div className="topnav">
                <Link className="active" to="/">Home</Link>
                <Link to="/worldsNews">World News</Link>
                {/* <Link to="/contact">Contact</Link> */}
                <Link to="/payment">Payment</Link>
            </div>
            <Outlet />
          </>
       )
  }

export default Layout