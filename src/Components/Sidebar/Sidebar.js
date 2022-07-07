import React from 'react'
import './Sidebar.css'
import iconDashborad from './analytics.svg'
import { Link } from 'react-router-dom'

export default function Sidebar() {
  return (
    <nav className='sidenav'>
      <img src={iconDashborad} alt="icon ananlytics" />
      <Link to="/">FINANCES</Link>
      <Link to="/dashboardEmployees">EMPLOI</Link>
    </nav>
  )
}
