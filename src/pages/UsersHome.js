import React, { useEffect, useState } from "react"
import { Link } from 'react-router-dom'
import SideBar from '../components/SideBar'
import './UsersHome.css'


class UsersHome extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      'users' : [],
      'page' : 1
    }

    this.fetchData = this.fetchData.bind(this);
  }


  fetchData(page) {

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


  componentDidMount(){
    this.fetchData(this.state.page);
  }

  render(){
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
              {console.log(this.state.users)}
              {this.state.users && this.state.users.map((user)=> {
                return (
                  <div className='list-item' key={user.id}>
                    <Link to={"/admin/users/"+user.id}><img className='user-img' src={ user.image } /></Link>
                    <div className='detalis'>
                        <p className='username'>{ user.name }</p>
                        <p className='trips-count'>Total Trips: { user.totalTrips }</p>
                        <p className='likes-count'>Likes: { user.likes }</p>
                        <p className='points'>Points: { user.points }</p>
                        <p className='status'>Status: <span>{ user.password }</span></p>
                        <p>{user.registrationDate}</p>
                        <p>{user.username}</p>
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
  
}

export default UsersHome