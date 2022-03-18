import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
   <section>
    <div className="banner">
     <h1>404</h1>
     <p>page not found</p>
    <Link to="/" className='btn-secondary'>return home</Link>
    </div>

   </section>
  )
}

export default Error
