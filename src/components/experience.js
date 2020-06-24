import React from 'react'

const PageBreak = () => <div className="page-break" />

export default ({ company, title, dateRange, children, pageBreak = false }) => {
  return (
    <>
      <div className="experience-container">
        <div className="experience-header">
          <span>
            <b>{title}</b> at {company}
          </span>
          {dateRange}
        </div>
        <ul>{children}</ul>
      </div>
      {pageBreak && <PageBreak />}
    </>
  )
}
