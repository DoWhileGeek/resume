import React from 'react'

export default ({ company, title, dateRange, children }) => {
  return(
    <div>
      <div className='experience-header'>
        <span><b>{title}</b> at {company}</span>
        {dateRange}
      </div>
      <ul>
        {children}
      </ul>
    </div>
  )
}
