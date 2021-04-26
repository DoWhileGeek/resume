import React from 'react'

import '../../styles/components/skills.scss'

const ProficiencyBar = ({ level = 1 }) => (
  <div className="proficiency-container">
    {Array(level)
      .fill(null)
      .map((_, index) => (
        <svg key={index} height="5" width="10">
          {/*<circle r="2.5" fill="black" />*/}
          <rect width="10" height="2.5" fill="black" />
        </svg>
      ))}
  </div>
)

const buildCell = ({ skill, level }) => (
  <div className="cell-container">
    <span key={skill} className="cell">
      {skill}
    </span>
    <ProficiencyBar level={level} />
  </div>
)

const buildRow = ([category, skills]) => {
  const heading = (
    <span key={category} className="heading">
      {category}
    </span>
  )

  return [heading, ...skills.sort((a, b) => b.level - a.level).map(buildCell)]
}

export default ({ skills }) => {
  const cells = Object.entries(skills).map(buildRow)

  return <div className="skills-container">{cells}</div>
}
