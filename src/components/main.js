import React from 'react'

import Title from './title'
import Section from './section'
import Skills from './skills'
import Experience from './experience'
import '../styles.scss';
import data from '../../data.json'

const buildExperiences = () => {
  console.log(data.experiences)
  return (
    data.experiences.map(experience => (
    <Experience
      key={experience.dateRange}
      company={experience.company}
      title={experience.title}
      dateRange={experience.dateRange}
    >
      {experience.accomplishments.map(accomplishment => <li key={accomplishment}>{accomplishment}</li>)}
    </Experience>
    ))
  )
}

export default () => {
  return(
    <div className='container'>
      <Title title='Joeseph Rodrigues' subtitle='Seeking a Senior Engineer position.' />
      <Section title='Skills'>
        <Skills skills={data.skills} />
      </Section>
      <Section title='Work Experience'>
        {buildExperiences()}
      </Section>
    </div>
  )
}
