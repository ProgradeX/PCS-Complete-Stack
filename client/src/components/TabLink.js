import React, { useState , useEffect } from 'react'
import './TabLink.css'

const TabLink = (props) => {

  const [Part, setPart] = useState([]);

  const getTdata=() => {
    fetch(`/api/${props.main}/${props.part}`)
    .then(function(response) {
        console.log(response, 'this is response');
        return response.json();
    })
    .then(function(newJson) {
        console.log(newJson, ' This is responded DATA');
        setPart(newJson);
    });
  }

  useEffect(() => {
    if (props.part !== ''){
      getTdata();
    }
  }, [props.part])

  function getItem(data, i) {
    if (data) {
      var heading = Object.keys(data)
      return ( data[heading[i]] )
    }
    else {
      return( 'None Selected' )
    }
  }


  return (
    <div className="tile" onClick={e => props.onSelect(props.a, props.main)}>
        <div className="subtile-2">
            <h2 className="definition">{props.main}</h2>
            <p className="selection">{getItem(Part[0], 1)}</p>
        </div>
    </div>
  )
}

export default TabLink