import React from 'react'
import "./dashboard.css"
import DashboardBodyDiv from './DashboardBodyDiv'
import DashboardHeader from './DashboardHeader'
import DashboardSideContent from './DashboardSideContent'


const Dashboard = () => {
    return (
        <>
            <DashboardHeader />
            <DashboardSideContent />
            <DashboardBodyDiv/>
        </>
    )
}

export default Dashboard