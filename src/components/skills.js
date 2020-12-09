import React from 'react'

import '../../styles/components/skills.scss'

const buildCell = (skill) => (
  <span key={skill} className="cell">
    {skill}
  </span>
)

const buildRow = ([category, skills]) => {
  const heading = (
    <span key={category} className="heading">
      {category}
    </span>
  )

  return [heading, ...skills.map(buildCell)]
}

export default ({ skills }) => {
  const cells = Object.entries(skills).map(buildRow)

  return <div className="skills-container">{cells}</div>
}
