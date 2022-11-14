import React from 'react'
import { Link } from "react-router-dom";
import './SideBar.css'

export default function SideBar() {
  return (
    <div className='sidebar'>
        <div className='logo'><Link to='/admin'>AM DASHBORD</Link></div>
        <div className='links'>
          <Link to={'/admin/users'} className='link'>Users</Link>
          <Link to={'/admin/orders'} className='link'>Orders</Link>
          <Link to={'/admin/transactions'} className='link'>Transactions</Link>
          <Link to={'/admin/settings'} className='link'>Settings</Link>
          <Link to={'/admin/users'} className='link'>Markting</Link>
          <Link to={'/admin/users'} className='link'>Accounting</Link>
          <Link to={'/admin/users'} className='link'>Analysis</Link>
          <Link to={'/admin/appsettings'} className='link'>App Settings</Link>
          <Link to={'/admin/logout'} className='link'>Logout</Link>
        </div>
    </div>
  )
}
