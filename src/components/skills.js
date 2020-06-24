import React from 'react'

export default ({ skills }) => {
  const buildColumn = (value, isHeader = false) =>
    isHeader ? <th key={value}>{value}</th> : <td key={value}>{value}</td>

  const buildRow = (category, values) => {
    return (
      <tr key={category}>
        {[category].map((item) => buildColumn(item, true))}
        {values.map((item) => buildColumn(item, false))}
      </tr>
    )
  }

  const rows = Object.keys(skills).map((category) =>
    buildRow(category, skills[category])
  )

  return (
    <table className="skills-container">
      <tbody>{rows}</tbody>
    </table>
  )
}
