import React from 'react'

export default React.memo(({ skills }) => {
  const buildColumn = (value, isHeader = false) => (
    isHeader ? (<th key={value}>{value}</th>) : (<td key={value}>{value}</td>)
  )

  const buildRow = (category, values) => {
    const paddedValues = [0,1,2,3,4].map(index => values[index] || '')
    return(
      <tr key={category}>
        {[category].map(item => buildColumn(item, true))}
        {paddedValues.map(item => buildColumn(item, false))}
      </tr>
    )
  }

  const rows = Object.keys(skills).map(category => buildRow(category, skills[category]))

  return(
    <table className='skills-container'>
      {rows}
    </table>
  )
})
