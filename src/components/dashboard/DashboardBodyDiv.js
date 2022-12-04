import React from 'react'
import AssignedProperty from './pages/AssignedProperty'
import { NavLink } from 'react-router-dom'

const DashboardBodyDiv = () => {
    return (
        <>
            <div className='body-main-div'>
                <div className='body-main-div-header'>
                    <ul className='body-main-div-header-list'>
                        <li>
                            <NavLink to="portfolio">Portfolio</NavLink>
                        </li>
                        <li>
                            <NavLink to="property">Assigned Property</NavLink>

                        </li>
                        <li>
                            <NavLink to="role">Role Assignment
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="history">History
                            </NavLink>
                        </li>
                    </ul>
                </div>

                <AssignedProperty/>
            </div>
        </>
    )
}

export default DashboardBodyDiv