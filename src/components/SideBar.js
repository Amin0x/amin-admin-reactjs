import React from 'react'
import { Link } from "react-router-dom";
import './SideBar.css'

export default function SideBar() {
  return (
    <div className='sidebar'>
        <div className='logo'><Link to='/'>AM DASHBORD</Link></div>
        <div className='links'>
          <Link to={'/users'} className='link'>Users</Link>
          <Link to={'/trips'} className='link'>Trips</Link>
          <Link to={'/transactions'} className='link'>Transactions</Link>
          <Link to={'/settings'} className='link'>Settings</Link>
          <Link to={'/users'} className='link'>Marking</Link>
          <Link to={'/users'} className='link'>Accounting</Link>
          <Link to={'/users'} className='link'>Analysis</Link>
          <Link to={'/settings'} className='link'>Server Settings</Link>
          <Link to={'/users'} className='link'>Logout</Link>
        </div>
    </div>
  )
}
