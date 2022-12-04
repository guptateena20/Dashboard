import React from 'react'
import { MdHomeWork } from "react-icons/md"
import { IoMdSettings } from "react-icons/io"
import { FaBell } from "react-icons/fa"
import { BsPersonFill } from "react-icons/bs"

const DashboardHeader = () => {
    return (
        <>
            <div class="main-container">
                <div class="blue-container">
                    <div className='header-container'>

                        <ul className='left-item'>
                            <li><MdHomeWork />Home</li>
                            <li>Portfolios</li>
                            <li>Add Portfolios</li>
                        </ul>

                        <p>Kunnga BApps</p>

                        <ul className='right-item'>
                            <li><IoMdSettings /></li>
                            <li><FaBell /></li>
                            <li><BsPersonFill /></li>
                        </ul>

                    </div>
                </div>
            </div>
        </>
    )
}

export default DashboardHeader