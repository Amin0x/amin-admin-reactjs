import React from 'react'
import { Link } from "react-router-dom";
import './SideBar.css'

export default function SideBar() {
  return (
    <div className='sidebar'>
        <div className='logo'><Link to='/'>AM DASHBORD</Link></div>
        <div className='links'>
          <Link to={'/admin/users'} className='link'>Users</Link>
          <Link to={'/admin/trips'} className='link'>Trips</Link>
          <Link to={'/admin/transactions'} className='link'>Transactions</Link>
          <Link to={'/admin/settings'} className='link'>Settings</Link>
          <Link to={'/admin/users'} className='link'>Marking</Link>
          <Link to={'/admin/users'} className='link'>Accounting</Link>
          <Link to={'/admin/users'} className='link'>Analysis</Link>
          <Link to={'/admin/settings'} className='link'>Server Settings</Link>
          <Link to={'/admin/logout'} className='link'>Logout</Link>
        </div>
    </div>
  )
}
