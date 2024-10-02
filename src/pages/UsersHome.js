import React, { useEffect, useState } from "react"
import { Link } from 'react-router-dom'
import SideBar from '../components/SideBar'
import './UsersHome.css'


let UsersHome = (props) => {

  

    let initstate = {
      'users' : [],
      'page' : 1
    }

   let [state, setState] = use state(initstate);

    


  function fetchData(page) {

    fetch("http://localhost:8080/admin/users?page="+page)

      .then((response) => {
        if(response.ok){
          return response.json();
        } else {
          throw 'eeeeeeeeeeeeeeeeeeeeeeee';
        }
      })
      .then((json) => {
        console.log(json);
        this.setState({'users': json, 'page': page});
        //this.setState();
      })
      .catch((err) => {
        console.log(err);
      }); 

  }


  useEffect(()=>{
    fetchData(this.state.page);
  });

  
    return (
      <div className='content'>
          <div className="content-main">
            <div className='nav'>
              <Link to={'/admin/users/create'} className='navlink'><span>Create User</span></Link>
              <Link to={'/admin/users'} className='navlink'><span>Sort</span></Link>
              <Link to={'/admin/users'} className='navlink'><span>Mode</span></Link>
              <Link to={'/admin/users'} className='navlink'><span>link</span></Link>
              <Link to={'/admin/users'} className='navlink'><span>link</span></Link>
            </div>
            <div className='search mb-3'>
              <span>Search: </span><input type={'text'} />
            </div>
            <div className="text-sm">
              <select className="mr-3 px-4 py-2 text-gray-700">
                <option>Registeration Date</option>
                <option>User Name</option>
                <option>Orders Counts</option>
                <option>Points Counts</option>
                <option>Name</option>
              </select>
              <select className="mr-3 px-4 py-2 text-gray-700">
                <option>ASD</option>
                <option>DES</option>
              </select>
              <button>update</button>
            </div>
            <div className='list-warp'>
              {console.log(this.state.users)}
              {this.state.users && this.state.users.map((user)=> {
                return (
                  <div className='list-item' key={user.id}>
                    <Link to={"/admin/users/"+user.id}><img className='user-img' src={ user.image } /></Link>
                    <div className='detalis'>
                        <p className='username'>{ user.name }</p>
                        <p className='trips-count text-sm'>Total Trips: { user.totalTrips }</p>
                        <p className='likes-count text-sm'>Likes: { user.likes }</p>
                        <p className='points text-sm'>Points: { user.points }</p>
                        <p className='status text-sm'>Status: <span>{ user.password }</span></p>
                        <p className="text-sm">Reg Date: {user.registrationDate}</p>
                        <p className="text-sm">Tel: {user.username}</p>
                        <div>
                          <button className="mr-2 text-sm">View</button>
                          <button className="mr-2 text-sm">Edit</button>
                          <button></button>
                        </div>
                    </div>
                  </div>
                )              
              })}
            </div>
            <div className='pagenate'>
              <Link to={'/users'} href="">Prev</Link>
              {/* <a href="" onClick={this.fetchData(this.state.page)}>Next</a> */}
            </div>
            <div className='footer'>v20220329</div>
          </div>
      </div>
    )
  
  
}

export default UsersHome