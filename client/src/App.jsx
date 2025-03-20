import React from 'react'
import axios from "axios"

import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"

const App = () => {

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

  return (
    <div className='text-center'>
      <h1>hello world</h1>
      <button
        className='btn btn-success fw-bolder'
        onClick={callServer}
      >
        call api
      </button>
    </div>
  )
}

export default App
