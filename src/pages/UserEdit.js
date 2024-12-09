import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import './UserEdit.css';

const UserEdit = () => {
    const { userId } = useParams();
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
    });

    const [isLoading, setIsLoading] = useState(true);
    const [errors, setErrors] = useState({});

    const fetchUserDetails = async () => {
        // Replace with actual API call to fetch user details
        const data = { name: "John Doe", email: "john.doe@example.com", password: "password123" };
        setUser(data);
    };

    useEffect(() => {
        fetchUserDetails();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    // Basic validation
    const newErrors = {};
    if (!userData.name) newErrors.name = 'Name is required';
    if (!userData.email) newErrors.email = 'Email is required';
    setErrors(newErrors);

    // If no validation errors, call the onSave prop
    if (Object.keys(newErrors).length === 0) {
      //send the data
    }
 
        // Replace with actual API call to update user details
        console.log("Updated User Details:", user);
    };

    return (
        <div className="user-edit">
            <h2>Edit User</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={user.name}
                        onChange={handleChange}
                        className="form-control"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={user.email}
                        onChange={handleChange}
                        className="form-control"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={user.password}
                        onChange={handleChange}
                        className="form-control"
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">Save Changes</button>
            </form>
        </div>
    );
};

export default UserEdit;