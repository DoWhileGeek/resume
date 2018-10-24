import React from 'react'

import Section from './section'
import Experience from './experience'

export default () => {
  return(
    <div>
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
