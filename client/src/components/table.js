import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

function Table(fetchReq) {

    const [data, setData] = useState([]);

    const getData=() => {
        fetch(`/api/${fetchReq.fetchReq}`)
        .then(function(response) {
            console.log(response);
            return response.json();
        })
        .then(function(myJson) {
            console.log(myJson);
            setData(myJson);
        });
    }

    useEffect(() => {
        getData();
        console.log('data retrieved')
    }, [])

  return (
    <div>
        <ul>
            {data.map((yes) => <li key={yes.acc_id}>{yes.acc_name} , {yes.acc_email}</li>)}
        </ul>
    </div>
  )
}

export default Table;