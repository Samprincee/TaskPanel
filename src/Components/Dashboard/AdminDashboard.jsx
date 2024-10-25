import React from 'react'
import Header from '../Other/Header'
import CreateTask from '../Other/CreateTask'
import AllTask from '../Other/AllTask'

const AdminDashboard = () => {
  return (
    <div>
        <Header />
        <CreateTask />
        <AllTask />
    </div>
  )
}

export default AdminDashboard