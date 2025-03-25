import React from 'react'
import { VscSearchStop } from "react-icons/vsc";

const page404 = () => {
    return (
        <div className='bg-dark p-5 vw-100 vh-100 text-light d-flex justify-content-center align-items-center'>
            <span className='fs-1 d-flex align-items-center gap-2'>
                <VscSearchStop size={"60px"} className='text-danger' /> Not Found
            </span>
        </div>
    )
}

export default page404
