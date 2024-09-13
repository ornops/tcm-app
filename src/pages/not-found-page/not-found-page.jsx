import React from 'react'
import { Link } from 'react-router-dom';
const NotFoundPage = () => {
  return (
    <div>
      <h1>404 Page Not Found</h1>
      <Link to='/'><button>Return to Homepage</button></Link>
    </div>
  )
}

export default NotFoundPage
