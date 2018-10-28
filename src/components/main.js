import React from 'react'

import Section from './section'
import Skills from './skills'
import Experience from './experience'
import '../styles.scss';

export default () => {
  return(
    <div className='container'>
      <Section title='Skills'>
        <Skills skills={skills} />
      </Section>
      <Section title='Work Experience'>
        <Experience
          company='Omadi'
          title='Sr Software Engineer'
          dateRange='August 2017 - Present'
        >
          <li>hi im a line</li>
          <li>me too</li>
        </Experience>
      </Section>
    </div>
  )
}

const skills = {
  Languages: ['Python', 'Nodejs', 'HTML/CSS/JS', 'Rust', 'C/C++'],
  Frameworks: ['React', 'React Native', 'Flask', 'GraphQL'],
  Databases: ['PostgreSQL', 'MongoDB', 'Couchbase', 'DynamoDB'],
  Tools: ['Vim', 'Git', 'iTerm2', 'Tmux'],
  Infrastructure: ['AWS', 'Docker', 'Serverless'],
}
