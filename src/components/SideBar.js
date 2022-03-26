import React from 'react'
import './SideBar.css'

export default function SideBar() {
  return (
    <div className='sidebar'>
        <div className='logo'>AM DASHBORD</div>
        <button>users</button>
        <button>trips</button>
        <button>transactions</button>
        <button>settings</button>
    </div>
  )
}
