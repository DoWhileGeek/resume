import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import '../../styles/components/contact.scss'

export default ({ contactMethods }) => {
  const contactCells = contactMethods.map(
    ({ method, prefix, text, url, color, newTab = false }) => {
      return (
        <div className="contact-cell" key={`contact-${method}`}>
          <a href={url} target={newTab ? '_blank' : null}>
            <FontAwesomeIcon icon={[prefix, method]} size="lg" color={color} />{' '}
            {text}
          </a>
        </div>
      )
    }
  )

  return <div className="contact-container">{contactCells}</div>
}
