import React from 'react'

export default ({ title, children }) => {
  return(
    <div>
      <h3>{title}</h3>
      <div className='section-container'>
        {children}
      </div>
    </div>
  )
}
