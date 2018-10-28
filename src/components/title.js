import React from 'react'

export default React.memo(({title, subtitle}) => {
  return(
    <div className='title'>
      <h1>{title}</h1>
      <span>{subtitle}</span>
    </div>
  )
})
