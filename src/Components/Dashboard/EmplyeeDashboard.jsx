import React from 'react'
import Header from '../Other/Header'
import TaskList from '../TaskList/TaskList'
import TaskNumberList from '../Other/TaskNumberList'

const EmplyeeDashboard = () => {
    return (
        <div>
            <Header />
            <TaskNumberList />
            <TaskList/>
        </div>
    )
}

export default EmplyeeDashboard