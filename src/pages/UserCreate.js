import React, { useEffect, useReducer, useState } from "react"
import { Link } from 'react-router-dom'
import './UserCreate.css'


let UserCreate = (props) => {
  
  let initVal = {
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
  }

  //const [data, dispatch] = useReducer(reducer, initVal)
  const [state, setState] = useState(initVal)

  function reducer(data, action){
    return {...state, [action.name] : action.value}
  }

  // function handleChange(e){
  //   dispatch({
  //     name: e.target.name,
  //     value: e.target.value
  //   });
  // }

  function handleChange(e){
    setState({
      [e.target.name]: e.target.value
    });
  }

  function sendform(e){
    e.preventDefault()

    //const form = new FormData()
    //form.append("", )

    const response = await fetch({
      body: data,
      url: "/admin/users",
      method: "post",
      headers:{ "accepts":"application/json" }
    });

    const json = await response.json();
    console.log(json);
   
  }



  return (
    <div className="px-16 py-8">
        <div className="text-2xl mb-8">Create User</div>
        <div className="columns-2">
          <div className="w-full mb-4">
            <label className="block  text-sm">Name:</label>
            <input className="bg-gray-400 outline-0" type="text" name="name" value={data.name} onChange={handleChange}/>
          </div>
          <div className="w-full mb-4">
            <label className="block  text-sm">Phone Number:</label>
            <input className="bg-gray-400 outline-0" type="text" name="username" value={data.username} onChange={handleChange}/>
          </div>
          <div className="w-full mb-4">
            <label className="block  text-sm">Natioal ID:</label>
            <input className="bg-gray-400 outline-0" type="text" name="nationalId" value={data.nationalId} onChange={handleChange}/>
          </div>
          <div className="w-full mb-4">
            <label className="block  text-sm">Natioal ID Issue Date:</label>
            <input className="bg-gray-400 outline-0" type="text" name="nationalIdIssueDate" value={data.nationalIdIssueDate} onChange={handleChange}/>
          </div>
          <div className="w-full mb-4">
            <label className="block  text-sm">Natioal ID Image (Front):</label>
            <input className="bg-gray-400 outline-0" type="text" name="nationalIdImageFront" value={data.nationalIdImageFront} onChange={handleChange}/>
          </div>
          <div className="w-full mb-4">
            <label className="block  text-sm">Natioal ID Image (Back):</label>
            <input className="bg-gray-400 outline-0" type="text" name="nationalIdImageBack" value={data.nationalIdImageBack} onChange={handleChange}/>
          </div>
          
          <div className="w-full mb-4">
            <label className="block  text-sm">Driving license:</label>
            <input className="bg-gray-400 outline-0" type="text" name="drivingLicense" value={data.drivingLicense} onChange={handleChange}/>
          </div>
          <div className="w-full mb-4">
            <label className="block  text-sm">Driving License Expire:</label>
            <input className="bg-gray-400 outline-0" type="text" name="drivingLicenseExpire" value={data.drivingLicenseExpire} onChange={handleChange}/>
          </div>
          <div className="w-full mb-4">
            <label className="block  text-sm">User Image:</label>
            <input className="bg-gray-400 outline-0" type="text" name="userImage" value={data.userImage} onChange={handleChange}/>
          </div>
          <div className="w-full mb-4">
            <label className="block  text-sm">Car Image (Front):</label>
            <input className="bg-gray-400 outline-0" type="text" name="carimageFront" value={data.carimageFront} onChange={handleChange}/>
          </div>
          <div className="w-full mb-4">
            <label className="block  text-sm">Car Color:</label>
            <input className="bg-gray-400 outline-0" type="text" name="carColor" value={data.carColor} onChange={handleChange}/>
          </div>
          <div className="w-full mb-4">
            <label className="block  text-sm">Car Image (Back):</label>
            <input className="bg-gray-400 outline-0" type="text" name="carImageBack" value={data.carImageBack} onChange={handleChange}/>
          </div>
          <div className="w-full mb-4">
            <label className="block  text-sm">Car Plate Number:</label>
            <input className="bg-gray-400 outline-0" type="text" name="carPlateNumber" value={data.carPlateNumber} onChange={handleChange}/>
          </div>
          <div className="w-full mb-4">
            <label className="block  text-sm">Car Registration Image (Front):</label>
            <input className="bg-gray-400 outline-0" type="text" name="carLicenseImageFront" value={data.carLicenseImageFront} onChange={handleChange}/>
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300" htmlFor="user_avatar">Upload file</label>
            <input className="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="user_avatar_help" id="user_avatar" type="file" />
            <div className="mt-1 text-sm text-gray-500 dark:text-gray-300" id="user_avatar_help">A profile picture is useful to confirm your are logged into your account</div>
          </div>

          <label htmlFor="default-toggle" className="inline-flex relative items-center mb-4 cursor-pointer">
            <input type="checkbox" value="" id="default-toggle" className="sr-only peer" />
            <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Toggle me</span>
          </label>

          <label htmlFor="checked-toggle" className="inline-flex relative items-center mb-4 cursor-pointer">
            <input type="checkbox" value="" id="checked-toggle" className="sr-only peer" defaultChecked />
            <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Checked toggle</span>
          </label>

          <label htmlFor="disabled-toggle" className="inline-flex relative items-center mb-3 cursor-pointer">
            <input type="checkbox" value="" id="disabled-toggle" className="sr-only peer" disabled />
            <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span className="ml-3 text-sm font-medium text-gray-400 dark:text-gray-500">Disabled toggle</span>
          </label>
        </div>
        <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Select your country</label>
        <select id="countries" className="mb-8 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          <option>United States</option>
          <option>Canada</option>
          <option>France</option>
          <option>Germany</option>
        </select>
        <div><button className="px-2.5 py-2 bg-sky-600 hover:bg-sky-900 hover:text-gray-100 text-sm" onClick={sendform}> Save changes </button></div>
    </div>
  )
}

export default UserCreate
