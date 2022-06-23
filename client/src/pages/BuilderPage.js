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
    const [Windowname, changeWindowname] = useState('Accounts')
    const onSelect = (a, selected) => {
        console.log('i switched tab ', a)
        changeA(a)
        changeWindowname(selected)
    }

    //update subtext for after part select
    const [CPU, updateCPU] = useState(['None Selected', 0, 0]);
    const [MB, updateMB] =   useState(['None Selected', 0, 0]);
    const [MEM, updateMEM] = useState(['None Selected', 0, 0]);
    const [STO, updateSTO] = useState(['None Selected', 0, 0]);
    const [CSE, updateCSE] = useState(['None Selected', 0, 0]);


    function switchPart(category, name, id, price){
        console.log(category);
        switch(category) {
            case 'Accounts':     
                updateCPU([name, id, price]);
                break;
            case 'Motherboard': 
                updateMB([name, id, price]);
                break;
            case 'Memory':      
                updateMEM([name, id, price]);
                break;
            case 'Storage':     
                updateSTO([name, id, price]);
                break;
            case 'Casing':
                updateCSE([name, id, price]);
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
                {console.log('all tabs rerendered')}
                <TabLink main="CPU"         a={true}    sub={CPU[0]}      onClick={() => {changeWindowname('CPU')}}/>
                <TabLink main="Motherboard" a={true}    sub={MB[0]}      onSelect={onSelect}/>
                <TabLink main="Memory"      a={false}   sub={MEM[0]}      onSelect={onSelect}/>
                <TabLink main="Storage"     a={false}   sub={STO[0]}      onSelect={onSelect}/>
                <TabLink main="Video Card"  a={true}    sub={'none'}      onSelect={onSelect}/>
                <TabLink main="Casing"      a={true}    sub={CSE[0]}      onSelect={onSelect}/>
                <TabLink main="PSU"         a={false}   sub={'none'}      onSelect={onSelect}/>
            </div>
            <div className="dbcontent">
                <DBContent optn={Windowname} a={A} updatePart={switchPart}/>
            </div>
        </div>
    )
}

export default BuilderPage