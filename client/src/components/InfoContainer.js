import React, { useEffect, useState } from 'react'

import './InfoContainer.css'

const InfoContainer = (props) => {

    const [buildprice, setBuildprice] = useState(0)
    const [buildwatts, setBuildwatts] = useState(0)

    const [clist, Setclist] = useState([])

    function calculateTotalPrice(item) {
        var sum = 0
        for (let i = 0; i < 8; i++) {
            if (item[i]["pprice"])
            {
                sum += item[i]["pprice"]
            }
        }
        return sum;
    }

    function EstimatedWattage(item) {
        var wattage = 0
        // ITEMS [ 0:CPU 1:CLR 2:MB 3:RAM 4:STO 5:VIDEO 6:CASING 7:PSU ]
        for (let i = 0; i < 7; i++) {
            if (item[i]["pwatts"])
            {
                wattage += item[i]["pwatts"]
            }
        }
        return wattage;
    }

    function checkCompatibility(item) {
        var issues = []
        // ITEMS [ 0:CPU 1:CLR 2:MB 3:RAM 4:STO 5:VIDEO 6:CASING 7:PSU ]
        if ((item[0] && item[2]) && (item[0]["cpu_socket"] !== item[2]["mb_socket"])) {
            issues.push("CPU and Motherboard Incompatible Socket");
        }
        if ((item[2] && item[3]) && (item[2]["mb_ramslots"] < item[3]["ram_modules"])) {
            issues.push("More RAM modules than Motherboard supports");
        }
        if (item[7] && (item[7]["psu_wattage"] < buildwatts * 2)){
            issues.push("Weak Power Supply, May cause system crashes")
        }
        return (issues);
    }

    useEffect(() => {
        //update total price
        setBuildprice(calculateTotalPrice(props.parts))

        //update compatibility
        Setclist(checkCompatibility(props.parts))

        //Wattage calculation
        setBuildwatts(EstimatedWattage(props.parts))

    }, props.parts)

    const RenderIssues = ({issues}) =>{
        return issues.map((issue ,index) => {
        return (
            <li className="list" key={index}> {issue} {console.log(issue)} </li> 
        )
        })
    }

    

  return (
    <div className="infocontainer">
        <input type="text" placeholder="Enter Build Name"/>
        <button className="buttonm">Publish</button>
        <p className="price">Total Price Rs. <span>{buildprice}</span> <br/> Wattage: <span>{buildwatts}</span></p>
        <RenderIssues issues={clist}/>
    </div>
  )
}

export default InfoContainer