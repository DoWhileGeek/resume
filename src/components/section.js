import React from 'react'

export default ({ title, children }) => {
  return(
    <div>
      <h2>{title}</h2>
      <div className='section-container'>
        {children}
      </div>
    </div>
  )
}
