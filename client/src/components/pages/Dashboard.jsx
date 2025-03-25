import axios from 'axios'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {

    let navigate = useNavigate()

    useEffect(() => {
        validateUser()
    })

    let validateUser = async () => {
        try {

            let result = await axios({
                method: "GET",
                url : `${import.meta.env.VITE_API_ADDRESS}/dashboard`,
                headers : {
                    token : localStorage.getItem("token")
                }
            })

            console.log(result)

        } catch (err) {
            console.log("you are not valid for dashboard !")
            navigate("/")
        }
    }

    let handelLogout = () => {
        localStorage.removeItem("token")
        navigate("/")
    }

    return (
        <>
            <h1>welcome to dashboard</h1>
            <button className='btn btn-danger' onClick={handelLogout}>logout</button>
        </>
    )
}

export default Dashboard
