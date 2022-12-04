import React from 'react'
import { MdHomeWork } from "react-icons/md"
import { RiMenu5Fill } from "react-icons/ri"
import { IoMdSettings } from "react-icons/io"
import { BsPersonLinesFill, BsBank2 } from "react-icons/bs"
import { GiSecurityGate } from "react-icons/gi"

const DashboardSideContent = () => {
    return (
        <>
            <div className='side-div'>
                <ul className='side-div-header'>
                    <li> <MdHomeWork />KUNNGA </li>
                    <li className = "bars" style={{ fontSize: "25px", fontWeight: "500" }}><RiMenu5Fill /></li>
                </ul>

                <hr style={{ color: "gray" }} />

                <div className='side-div-list'>
                    <ul className='list'>
                        <li><MdHomeWork /> Dashboard</li>
                        <li><BsPersonLinesFill /> Property Management</li>
                        <li><BsBank2 /> Financial Accounting</li>
                        <li><IoMdSettings /> Setting</li>
                        <li><GiSecurityGate /> Security</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default DashboardSideContent