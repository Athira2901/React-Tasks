import React from 'react'
import { Routes,Route } from 'react-router-dom'
import App from './App'
import Empform from './Empform'
function Router() {
  return (
    <div>
        <Routes>
            <Route path="" element={<App/>}></Route>
            <Route path="/empform" element={<Empform/>}></Route>
            

        </Routes>
    </div>
  )
}

export default Router