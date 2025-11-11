import React from 'react'

const Layout = ({ children } : { children: React.ReactNode }) => {
  return (
    <div>
        DashBoard NavBar
        {children}
    </div>
  )
}

export default Layout