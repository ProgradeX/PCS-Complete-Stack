import React from 'react'
import './TabLink.css'

const TabLink = (props) => {

  return (
    <div className="tile">
        <div className="subtile-2">
            <h2 className="definition">{props.main}</h2>
            <p className="selection">{props.sub}</p>
        </div>
    </div>
  )
}

export default TabLink