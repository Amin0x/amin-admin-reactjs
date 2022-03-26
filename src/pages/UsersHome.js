import React from 'react'
import './UsersHome.css'

function UsersHome() {
  return (
    <div className='users-home-warp'>
        <div className='nav'></div>
        <div className='list-warp'>
            <div className='list-item'>
                <img className='avatar'/>
                <div className='detalis'>
                    <p>Amin Omer</p>
                    <p>1200</p>
                    <p>1200</p>
                    <p>1200</p>
                    <p>Status: <span>Active</span></p>
                    <button>del</button>
                    <button>edit</button>
                    <button>Block</button>
                </div>
            </div>
        </div>
        <div className='pagenate'></div>
    </div>
  )
}

export default UsersHome