import { data } from "autoprefixer"
import React, { useEffect, useReducer, useState } from "react"
import { Link } from 'react-router-dom'
import './UserCreate.css'

function UserCreate(){
  

  const [name, setName] = useState('')
  const [username, setUsername] = useState('')
  const [nationalId, setNationalIdOnChange] = useState('')
  const [nationalIdImageFront, setNationalIdImageFront] = useState('')
  const [nationalIdImageBack, setNationalIdImageBack] = useState('')
  const [nationalIdIssueDate, setNationalIdIssueDate] = useState('')
  

  function nameOnChange(event){
      setName(event.target.value)
  }

  function usernameOnChange(event){
    setUsername(event.target.value)
  }

  function nationalIdOnChange(event){
    setNationalIdOnChange(event.target.value)
  }

  function nationalIdImageFrontOnChange(event){
    setNationalIdImageFront(event.target.value)
  }

  function nationalIdIssueDateOnChange(event){
    setNationalIdIssueDate(event.target.value)
  }

  function nationalIdImageBackOnChange(event){
    setNationalIdImageBack(event.target.value)
  }

  function sendform(){

    const form = new FormData()
    form.append("", )

    fetch({
      body: form,
      url: "",
      method: "post"
    })
  }



  return (
    <div className="px-5 py-5">
        <div className="text-2xl">create user</div>
        <div className="columns-2">
          <div className="w-full mb-2">
            <label className="block  text-sm">name:</label>
            <input value={name} className="bg-gray-400 outline-0" type="text" onChange={nameOnChange}/>
          </div>
          <div className="w-full mb-2">
            <label className="block  text-sm">user name:</label>
            <input className="bg-gray-400 outline-0" type="text" value={username} onChange={usernameOnChange}/>
          </div>
          <div className="w-full mb-2">
            <label className="block  text-sm">natioal id:</label>
            <input className="bg-gray-400 outline-0" type="text" value={nationalId} onChange={nationalIdOnChange}/>
          </div>
          <div className="w-full mb-2">
            <label className="block  text-sm">natioal id Image Front:</label>
            <input className="bg-gray-400 outline-0" type="text" value={nationalIdImageFront} onChange={nationalIdImageFrontOnChange}/>
          </div>
          <div className="w-full mb-2">
            <label className="block  text-sm">natioal id Image Back:</label>
            <input className="bg-gray-400 outline-0" type="text" value={nationalIdImageBack} onChange={nationalIdImageBackOnChange}/>
          </div>
          <div className="w-full mb-2">
            <label className="block  text-sm">natioal id issue date:</label>
            <input className="bg-gray-400 outline-0" type="text" value={nationalIdIssueDate} onChange={nationalIdIssueDateOnChange}/>
          </div>
          <div className="w-full mb-2">
            <label className="block  text-sm">driving lesinse:</label>
            <input className="bg-gray-400 outline-0" type="text" onChange={nationalIdOnChange}/>
          </div>
          <div className="w-full mb-2">
            <label className="block  text-sm">driving lesince issue:</label>
            <input className="bg-gray-400 outline-0" type="text" onChange={nationalIdOnChange}/>
          </div>
          <div className="w-full mb-2">
            <label className="block  text-sm">user image:</label>
            <input className="bg-gray-400 outline-0" type="text" onChange={nationalIdOnChange}/>
          </div>
          <div className="w-full mb-2">
            <label className="block  text-sm">car image:</label>
            <input className="bg-gray-400 outline-0" type="text" onChange={nationalIdOnChange}/>
          </div>
          <div className="w-full mb-2">
            <label className="block  text-sm">car image:</label>
            <input className="bg-gray-400 outline-0" type="text" />
          </div>
          <div className="w-full mb-2">
            <label className="block  text-sm">car image:</label>
            <input className="bg-gray-400 outline-0" type="text" />
          </div>
          <div className="w-full mb-2">
            <label className="block  text-sm">car image:</label>
            <input className="bg-gray-400 outline-0" type="text" />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300" for="user_avatar">Upload file</label>
            <input className="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="user_avatar_help" id="user_avatar" type="file" />
            <div className="mt-1 text-sm text-gray-500 dark:text-gray-300" id="user_avatar_help">A profile picture is useful to confirm your are logged into your account</div>
          </div>

          <label for="default-toggle" className="inline-flex relative items-center mb-4 cursor-pointer">
            <input type="checkbox" value="" id="default-toggle" className="sr-only peer" />
            <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Toggle me</span>
          </label>

          <label for="checked-toggle" class="inline-flex relative items-center mb-4 cursor-pointer">
            <input type="checkbox" value="" id="checked-toggle" className="sr-only peer" checked />
            <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Checked toggle</span>
          </label>

          <label for="disabled-toggle" className="inline-flex relative items-center mb-3 cursor-pointer">
            <input type="checkbox" value="" id="disabled-toggle" className="sr-only peer" disabled />
            <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span className="ml-3 text-sm font-medium text-gray-400 dark:text-gray-500">Disabled toggle</span>
          </label>
        </div>
        <label for="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Select your country</label>
        <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          <option>United States</option>
          <option>Canada</option>
          <option>France</option>
          <option>Germany</option>
        </select>
        <div><button className="bg-sky-600 hover:bg-sky-700"> Save changes </button></div>
    </div>
  )
}

export default UserCreate
