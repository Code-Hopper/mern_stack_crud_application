import React, { useState } from 'react'
import axios from "axios"

import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"

const App = () => {

  let [formData, setFormData] = useState({
    name: "", phone: ""
  })

  let callServer = async () => {
    // this function will make an api request from frontend to backend  

    try {

      let result = await axios({
        method: "GET",
        url: import.meta.env.VITE_API_ADDRESS,
        data: null,
        header: null
      })

      console.log(result)

    } catch (err) {
      console.log("unable to contact backend : ", err)
    }

  }

  let handelChange = (e) => {
    let { name, value } = e.target

    setFormData(prev => {
      return { ...prev, [name]: value }
    })

  }

  let handelSubmit = async (e) => {
    e.preventDefault()

    try {

      // let result = await axios.post(import.meta.env,VITE_API_ADDRESS, formData)

      let result = await axios({
        method: "POST",
        url: import.meta.env.VITE_API_ADDRESS,
        data: formData
      })

      console.log(result)

      if (result.status === 202) {
        alert(result.data.message)
      }

    } catch (err) {
      console.log('unable to submit data to backend !')
      console.log(err)
    }
  }

  return (
    <div className='text-center'>
      <h1>hello world</h1>
      <button
        className='btn btn-success fw-bolder'
        onClick={callServer}
      >
        call api
      </button>

      <div className='d-flex flex-column align-items-center'>
        <form onSubmit={handelSubmit}>
          <input onChange={handelChange} type="text" placeholder='name' name='name' value={formData.name} />
          <input onChange={handelChange} type="number" placeholder='phone number' name='phone' value={formData.phone} />
          <button type='submit'>submit</button>
        </form>
      </div>

    </div>
  )
}

export default App
