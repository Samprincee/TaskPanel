import React from 'react'
import Login from './Components/Auth/Login'
import EmplyeeDashboard from './Components/Dashboard/EmplyeeDashboard'
import AdminDashboard from './Components/Dashboard/AdminDashboard'

function App() {
  return (
    <div>
      {/* <Login/> */}
      <EmplyeeDashboard />
      {/* <AdminDashboard /> */}
    </div>
  )
}

export default App