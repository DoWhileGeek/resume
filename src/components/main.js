import React from 'react'

import Title from './title'
import Section from './section'
import Contact from './contact'
import Skills from './skills'
import Experience from './experience'
import '../styles.scss';
import data from '../../data.json'

const buildExperiences = () => {
  return (
    data.experiences.map(experience => (
    <Experience
      key={experience.dateRange}
      company={experience.company}
      title={experience.title}
      dateRange={experience.dateRange}
    >
      {experience.accomplishments.map((accomplishment, index) => <li key={index}>{accomplishment}</li>)}
    </Experience>
    ))
  )
}

export default () => {
  return(
    <div className='container'>
      <Title title='Joeseph Rodrigues' subtitle='Seeking a Senior Engineer position.' />

      <Section title='Contact'>
        <Contact/>
      </Section>

      <Section title='Skills'>
        <Skills skills={data.skills} />
      </Section>

      <Section title='Work Experience'>
        {buildExperiences()}
      </Section>
    </div>
  )
}
