import React from 'react'
import Portfolio from './Portfolio'
import {Routes, Route} from "react-router-dom"
import AssignedProperty from './AssignedProperty'
import RoleAssigned from './RoleAssigned'
import History from './History'

const Routes = () => {
  return (
    <>
    <Routes>

        <Route path = "portfolio" element = {<Portfolio/>}/>
        <Route path = "property" element = {<AssignedProperty/>}/>
        <Route path = "role" element = {<RoleAssigned/>}/>
        <Route path = "history" element = {<History/>}/>
        
    </Routes>
    </>
  )
}

export default Routes