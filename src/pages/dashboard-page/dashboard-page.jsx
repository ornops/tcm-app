import React from 'react'
import NavBar from '../../components/nav-bar/nav-bar'
import Panel from '../../components/panel/panel'
import './dashboard-page.scss'
const DashboardPage = () => {
  return (
    <div className='dashboard-container'>
      <div className="header-container">
        <h1>Dashboard Page</h1>
        <NavBar />
      </div>

      <div className="panels-container">
        <div className="upper-panels">
          <Panel panelTitle='Total Test Cases' panelValue='100' />
          <Panel panelTitle='Total Test Suites' panelValue='5' />
        </div>
        <div className="lower-panels">
          <Panel panelTitle='Completed Executions' panelValue='50' />
          <Panel panelTitle='Pass/Fail Rate' panelValue='75%' />
        </div>

      </div>

      <div className="activity-feed-container">
        <div>Recent Activity</div>
        <ol>
          <li>1. Test Case 01 executed successfully</li>
          <li>2. Test Suite Alpha run completed</li>
          <li>3. Test Case 12 failed during execution</li>
        </ol>

      </div>

    </div>
  )
}

export default DashboardPage
