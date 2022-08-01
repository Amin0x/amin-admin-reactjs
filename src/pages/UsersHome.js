import React, { useEffect, useState } from "react"
import { Link } from 'react-router-dom'
import SideBar from '../components/SideBar'
import './UsersHome.css'

const data = {
  page : {

  },
  users: [
  {
    id: 199,
    name: 'Amin Omer',
    totalTrips: 983,
    likes: 49,
    points: 2398,
    status: 'Active',
    image: '',
  },
  {
    id: 199,
    name: 'Amin Omer',
    totalTrips: 983,
    likes: 49,
    points: 2398,
    status: 'Active',
    image: '',
  },
  {
    id: 199,
    name: 'Amin Omer',
    totalTrips: 983,
    likes: 49,
    points: 2398,
    status: 'Active',
    image: '',
  },
  {
    id: 199,
    name: 'Amin Omer',
    totalTrips: 983,
    likes: 49,
    points: 2398,
    status: 'Active',
    image: '',
  }
]};

function UsersHome() {


  const [users, setUsers] = useState([])
  let page = 0

  const fetchData = (page) => {

    fetch("http://localhost:8080/admin/users?page="+page)

      .then(response => {

        return response.json()

      })
      .then(data => {
        ++page
        setUsers(data)

      })

  }


  useEffect(() => {

    fetchData(page)

  }, [])



  const data = {
    page : {
  
    },
    users: [
    {
      id: 199,
      name: 'Amin Omer',
      totalTrips: 983,
      likes: 49,
      points: 2398,
      status: 'Active',
      image: process.env.PUBLIC_URL + '/no_profile_image.jpg',
    },
    {
      id: 199,
      name: 'Ameena Amin Omer',
      totalTrips: 983,
      likes: 49,
      points: 2398,
      status: 'Active',
      image: process.env.PUBLIC_URL + '/profile1.jpg',
    },
    {
      id: 199,
      name: 'Amy Amin Omer',
      totalTrips: 983,
      likes: 49,
      points: 2398,
      status: 'Active',
      image: process.env.PUBLIC_URL + '/profile2.jpg',
    },
    {
      id: 199,
      name: 'Amira Omer Amin',
      totalTrips: 983,
      likes: 49,
      points: 2398,
      status: 'Active',
      image: process.env.PUBLIC_URL + '/profile4.jpg',
    },
    {
      id: 199,
      name: 'Amanda Amin Omer',
      totalTrips: 983,
      likes: 49,
      points: 2398,
      status: 'Active',
      image: process.env.PUBLIC_URL + '/profile3.jpg',
    },
    {
      id: 199,
      name: 'Amanda Amin Omer',
      totalTrips: 983,
      likes: 49,
      points: 2398,
      status: 'Active',
      image: process.env.PUBLIC_URL + '/profile6.jpg',
    },
    {
      id: 199,
      name: 'Amanda Amin Omer',
      totalTrips: 983,
      likes: 49,
      points: 2398,
      status: 'Active',
      image: process.env.PUBLIC_URL + '/profile7.jpg',
    }
  ]};

  return (
    <div className='content'>
        <SideBar />
        <div className="content-main">
          <div className='nav'>
            <Link to={'/admin/users/create'} className='navlink'><span>Create User</span></Link>
            <Link to={'/admin/users'} className='navlink'><span>Sort</span></Link>
            <Link to={'/admin/users'} className='navlink'><span>Mode</span></Link>
            <Link to={'/admin/users'} className='navlink'><span>link</span></Link>
            <Link to={'/admin/users'} className='navlink'><span>link</span></Link>
          </div>
          <div className='search'>
            <span>Search: </span><input type={'text'} />
          </div>
          <div className='list-warp'>
            {users.map((user)=> {
              return (
                <div className='list-item'>
                  <img className='user-img' src={ user.image } />
                  <div className='detalis'>
                      <p className='username'>{ user.name }</p>
                      <p className='trips-count'>Total Trips: { user.totalTrips }</p>
                      <p className='likes-count'>Likes: { user.likes }</p>
                      <p className='points'>Points: { user.points }</p>
                      <p className='status'>Status: <span>{ user.password }</span></p>
                  </div>
                </div>
              )              
            })}
          </div>
          <div className='pagenate'>
            <Link to={'/users'} href="">Prev</Link>
            <a href="" onClick={fetchData(page)}>Next</a>
          </div>
          <div className='footer'>v20220329</div>
        </div>
    </div>
  )
}

export default UsersHome