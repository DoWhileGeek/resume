import React from 'react'

export default ({ company, title, dateRange, children }) => {
  return(
    <div>
      {title} @ {company}
      <ul>
        {children}
      </ul>
    </div>
  )
}
