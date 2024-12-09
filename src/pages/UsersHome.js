import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import SideBar from "../components/SideBar";
import "./UsersHome.css";

const UsersHome = (props) => {
    let initstate = {
        users: [],
        page: 1
    };

    const [state, setState] = useState(initstate);

    const fetchData = (page) => {
        fetch(`http://localhost:8080/admin/users?page=${page}`)
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error("Error fetching data");
                }
            })
            .then((json) => {
                console.log(json);
                setState({ users: json, page: page });
            })
            .catch((err) => {
                console.error(err);
            });
    };

    useEffect(() => {
        fetchData(state.page);
    }, [state.page]);

    return (
        <div className="content">
            <div className="content-main">
                <div className="nav">
                    <Link to={"/admin/users/create"} className="navlink"><span>Create User</span></Link>
                    <Link to={"/admin/users"} className="navlink"><span>Sort</span></Link>
                    <Link to={"/admin/users"} className="navlink"><span>Mode</span></Link>
                    <Link to={"/admin/users"} className="navlink"><span>Link</span></Link>
                    <Link to={"/admin/users"} className="navlink"><span>Link</span></Link>
                </div>
                <div className="search mb-3">
                    <span>Search: </span><input type="text" />
                </div>
                <div className="text-sm">
                    <select className="mr-3 px-4 py-2 text-gray-700">
                        <option>Registration Date</option>
                        <option>User Name</option>
                        <option>Orders Count</option>
                        <option>Points Count</option>
                        <option>Name</option>
                    </select>
                    <select className="mr-3 px-4 py-2 text-gray-700">
                        <option>ASD</option>
                        <option>DES</option>
                    </select>
                    <button>Update</button>
                </div>
                <div className="list-warp">
                    {console.log(state.users)}
                    {state.users && state.users.map((user) => {
                        return (
                            <div className="list-item" key={user.id}>
                                <Link to={`/admin/users/${user.id}`}><img className="user-img" src={user.image} alt="User" /></Link>
                                <div className="details">
                                    <p className="username">{user.name}</p>
                                    <p className="trips-count text-sm">Total Trips: {user.totalTrips}</p>
                                    <p className="likes-count text-sm">Likes: {user.likes}</p>
                                    <p className="points text-sm">Points: {user.points}</p>
                                    <p className="status text-sm">Status: <span>{user.password}</span></p>
                                    <p className="text-sm">Reg Date: {user.registrationDate}</p>
                                    <p className="text-sm">Tel: {user.username}</p>
                                    <div>
                                        <button className="mr-2 text-sm">View</button>
                                        <button className="mr-2 text-sm">Edit</button>
                                        <button>Delete</button>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div className="paginate">
                    <button onClick={() => fetchData(state.page - 1)}>Prev</button>
                    <button onClick={() => fetchData(state.page + 1)}>Next</button>
                </div>
                <div className="footer">v20220329</div>
            </div>
        </div>
    );
};

export default UsersHome;