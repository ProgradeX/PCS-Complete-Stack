import React, { useState , useEffect } from 'react'
import './TabLink.css'

const TabLink = (props) => {

  const [Part, setPart] = useState([]);

  const getTdata=() => {
    fetch(`/api/${props.main}/${props.part["pid"]}`)
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

  function getItem(data, heading) {
    if (data) {
      return ( data[heading] )
    }
  }


  return (
    <div className="tile" onClick={e => props.onSelect(props.a, props.main)}>
        <div className="subtile-2">
            <h2 className="definition">{props.main}</h2>
            <p className="selection">{[Part[0] ? getItem(Part[0], "pvendor") : '']} - {[Part[0] ? getItem(Part[0], "pname") : 'None Selected']}</p>
            <p className="price">Rs. {[Part[0] ? getItem(Part[0], "pprice") : 0]}</p>
        </div>
    </div>
  )
}

export default TabLink