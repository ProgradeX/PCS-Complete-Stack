import React from 'react'
import './BuilderPage.css'
import { useState } from 'react'

import TabLink from '../components/TabLink'
import DBContent from '../components/DBContent'

function BuilderPage() {
    const buildID = 1234;
    const compstate = 'OK';
    const watts = 0;

    // on change of tabs
    const [A, changeA] = useState(false)
    const [Windowname, changeWindowname] = useState('')
    const onSelect = (a, selected) => {
        console.log('i switched tab ', a)
        changeA(a)
        changeWindowname(selected)
    }

    //update subtext for after part select
    const [CPU, updateCPU] = useState('')
    const [MB, updateMB] =   useState('')
    const [MEM, updateMEM] = useState('')
    const [STO, updateSTO] = useState('')
    const [CSE, updateCSE] = useState('')


    function switchPart(category, part){
        console.log(category);
        switch(category) {
            case 'CPU':     
                console.log(part)
                updateCPU(part["cpu_id"]);
                break;
            case 'Motherboard': 
                updateMB([part[0]]);
                break;
            case 'Memory':      
                console.log(part)
                updateMEM(part["ram_id"]);
                break;
            case 'Storage':     
                updateSTO([part]);
                break;
            case 'Casing':
                updateCSE([part]);
                break;
            default:
                console.log('idk what u on about bruh')
        }
    }

    
    return (
        <div className="BuilderPageContent">
            <div className="sidenav">
                <div className="info-container">
                    <p>build ID: {buildID} <br/>Compatibility: {compstate} <br/>Wattage: {watts} W</p>
                </div>
                <TabLink main="CPU"         a={true}    part={CPU}      onSelect={onSelect}/>
                <TabLink main="Motherboard" a={true}    part={MB}       onSelect={onSelect}/>
                <TabLink main="Memory"      a={false}   part={MEM}      onSelect={onSelect}/>
                <TabLink main="Storage"     a={false}   part={STO}      onSelect={onSelect}/>
                <TabLink main="Video Card"  a={true}    part={''}   onSelect={onSelect}/>
                <TabLink main="Casing"      a={true}    part={CSE}      onSelect={onSelect}/>
                <TabLink main="PSU"         a={false}   part={''}   onSelect={onSelect}/>
            </div>
            <div className="dbcontent">
                <DBContent optn={Windowname} a={A} updatePart={switchPart}/>
            </div>
        </div>
    )
}

export default BuilderPage