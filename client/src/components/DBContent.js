import React, { useState, useEffect } from 'react'
import './DBContent.css'

const DBContent = (props) => {

  //retrieve all data
  const [Tinfo, setTinfo] = useState([]);
  const [Tdata, setTdata] = useState([]);

    // get table header data
    const getTinfo=() => {
        fetch(`/api/${props.optn}/`)
        .then(function(response) {
            console.log(response);
            return response.json();
        })
        .then(function(myJson) {
            console.log(myJson, ' This is HEADERS');
            setTinfo(myJson);
        });
    }
    // get table database record
    const getTdata=() => {
      fetch(`/api/${props.optn}/data/`)
      .then(function(response) {
          console.log(response);
          return response.json();
      })
      .then(function(newJson) {
          console.log(newJson, ' This is DATA');
          setTdata(newJson);
      });
    }

    //update stuff
    useEffect(() => {
      getTinfo();
      getTdata();
      console.log('data retrieved')
  }, [props.optn]);

  return (
    <div>
      <div className="banner">
        <h1 style={{color: 'white'}}>Select {[props.a ? 'a' : '']} {props.optn}</h1>
      </div>
      <div className="database">
        <table id="listtable">
          <tbody>
          {console.log('table creating 2..')}
            <tr key='0'>{Tinfo.map((c, inc) => <th key={inc}>{c.COLUMN_NAME}</th>)}</tr>
            {console.log('table creating..')}
            {Tdata.map((e)=> 
            <tr key={e.acc_id+1}>
              <td><button onClick={() => props.updatePart(props.optn, e.acc_name, e.acc_email, e.password)}>{e.acc_id}</button></td>
              <td>{e.acc_name}</td>
              <td>{e.acc_email}</td>
              <td>{e.acc_password}</td>
            </tr>
            )}

          </tbody>
        </table>
      </div>
    </div>
  )
}

export default DBContent