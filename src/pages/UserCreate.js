import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import './UserCreate.css';

const UserCreate = () => {
  const initVal = {
    name: '',
    username: '',
    nationalId: '',
    nationalIdImageFront: '',
    nationalIdImageBack: '',
    nationalIdIssueDate: '',
    drivingLicense: '',
    drivingLicenseExpire: '',
    userImage: '',
    carimageFront: '',
    carColor: '',
    carImageBack: '',
    carPlateNumber: '',
    carLicenseImageFront: '',
    country: ''
  };

  const [state, setState] = useState(initVal);
  const [countries, setCountries] = useState([]);
  const [formError, setFormError] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setState(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Handle file uploads
  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setState(prevState => ({
      ...prevState,
      [name]: files[0]
    }));
  };

  // Fetch country list
  useEffect(() => {
    const fetchCountryList = async () => {
      try {
        const response = await fetch('https://restcountries.com/v3.1/all');
        const data = await response.json();
        setCountries(data.map(country => country.name.common));
      } catch (error) {
        console.error('Error fetching countries:', error);
      }
    };

    fetchCountryList();
  }, []);

  // Form submission
  const sendForm = async (e) => {
    e.preventDefault();
    setFormError(""); // Reset any previous errors

    // Validate form fields
    if (!state.name || !state.username || !state.nationalId || !state.country) {
      setFormError("Please fill in all required fields.");
      return;
    }

    // Prepare form data
    const formData = new FormData();
    Object.keys(state).forEach(key => {
      formData.append(key, state[key]);
    });

    try {
      const response = await fetch('/admin/users', {
        method: 'POST',
        body: formData,
        headers: {
          "Accept": "application/json"
        }
      });

      const result = await response.json();

      if (response.ok) {
        // Handle success (redirect, show success message, etc.)
        console.log("User created successfully:", result);
      } else {
        setFormError(result.message || "Failed to create user.");
      }
    } catch (error) {
      setFormError("Error while submitting the form.");
      console.error(error);
    }
  };

  return (
    <form id="userCreateForm" onSubmit={sendForm}>
      <div className="px-16 py-8">
        <div className="text-2xl mb-8">Create User</div>
        <div className="columns-2">
          {/* User fields */}
          <div className="w-full mb-4">
            <label className="block text-sm">Name:</label>
            <input
              className="bg-gray-400 outline-0"
              type="text"
              name="name"
              value={state.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="w-full mb-4">
            <label className="block text-sm">Phone Number:</label>
            <input
              className="bg-gray-400 outline-0"
              type="text"
              name="username"
              value={state.username}
              onChange={handleChange}
              required
            />
          </div>
          <div className="w-full mb-4">
            <label className="block text-sm">National ID:</label>
            <input
              className="bg-gray-400 outline-0"
              type="text"
              name="nationalId"
              value={state.nationalId}
              onChange={handleChange}
              required
            />
          </div>
          <div className="w-full mb-4">
            <label className="block text-sm">National ID Issue Date:</label>
            <input
              className="bg-gray-400 outline-0"
              type="text"
              name="nationalIdIssueDate"
              value={state.nationalIdIssueDate}
              onChange={handleChange}
            />
          </div>
          <div className="w-full mb-4">
            <label className="block text-sm">National ID Image (Front):</label>
            <input
              className="bg-gray-400 outline-0"
              type="file"
              name="nationalIdImageFront"
              onChange={handleFileChange}
            />
          </div>
          <div className="w-full mb-4">
            <label className="block text-sm">National ID Image (Back):</label>
            <input
              className="bg-gray-400 outline-0"
              type="file"
              name="nationalIdImageBack"
              onChange={handleFileChange}
            />
          </div>
          <div className="w-full mb-4">
            <label className="block text-sm">Driving License:</label>
            <input
              className="bg-gray-400 outline-0"
              type="text"
              name="drivingLicense"
              value={state.drivingLicense}
              onChange={handleChange}
            />
          </div>
          <div className="w-full mb-4">
            <label className="block text-sm">Driving License Expire:</label>
            <input
              className="bg-gray-400 outline-0"
              type="text"
              name="drivingLicenseExpire"
              value={state.drivingLicenseExpire}
              onChange={handleChange}
            />
          </div>
          <div className="w-full mb-4">
            <label className="block text-sm">User Image:</label>
            <input
              className="bg-gray-400 outline-0"
              type="file"
              name="userImage"
              onChange={handleFileChange}
            />
          </div>

          {/* Car details */}
          <div className="w-full mb-4">
            <label className="block text-sm">Car Image (Front):</label>
            <input
              className="bg-gray-400 outline-0"
              type="file"
              name="carimageFront"
              onChange={handleFileChange}
            />
          </div>
          <div className="w-full mb-4">
            <label className="block text-sm">Car Color:</label>
            <input
              className="bg-gray-400 outline-0"
              type="text"
              name="carColor"
              value={state.carColor}
              onChange={handleChange}
            />
          </div>
          <div className="w-full mb-4">
            <label className="block text-sm">Car Image (Back):</label>
            <input
              className="bg-gray-400 outline-0"
              type="file"
              name="carImageBack"
              onChange={handleFileChange}
            />
          </div>
          <div className="w-full mb-4">
            <label className="block text-sm">Car Plate Number:</label>
            <input
              className="bg-gray-400 outline-0"
              type="text"
              name="carPlateNumber"
              value={state.carPlateNumber}
              onChange={handleChange}
            />
          </div>
          <div className="w-full mb-4">
            <label className="block text-sm">Car Registration Image (Front):</label>
            <input
              className="bg-gray-400 outline-0"
              type="file"
              name="carLicenseImageFront"
              onChange={handleFileChange}
            />
          </div>

          {/* Country dropdown */}
          <div className="mb-8">
            <label htmlFor="countries" className="block text-sm">Select your country:</label>
            <select
              id="countries"
              className="bg-gray-50 text-gray-900 text-sm rounded-lg p-2.5"
              name="country"
              value={state.country}
              onChange={handleChange}
              required
            >
              <option value="">Select country</option>
              {countries.map(country => (
                <option key={country} value={country}>{country}</option>
              ))}
            </select>
          </div>

          {/* Form Error */}
          {formError && <div className="text-red-500 text-sm">{formError}</div>}

          {/* Submit button */}
          <div>
            <button
              className="px-2.5 py-2 bg-sky-600 hover:bg-sky-900 hover:text-gray-100 text-sm"
              type="submit"
            >
              Save changes
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default UserCreate;