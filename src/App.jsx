import React from 'react'
import Login from './Components/Auth/Login'
import Header from './Components/Other/Header'
import TaskNumberList from './Components/Other/TaskNumberList'
import TaskList from './Components/TaskList/TaskList'

function App() {
  return (
    <div>
      {/* <Login/> */}
      <Header />
      <TaskNumberList />
      <TaskList />
    </div>
  )
}

export default App