import React, { useEffect, useState } from 'react'
import {useLocation, useNavigate} from 'react-router-dom'
import FighterDivisionTable from './fighterDivisionTable';
import {v4 as uuid} from 'uuid'


export default function UFCAllFighters() {
    const location = useLocation();
    const navigate = useNavigate();

    const [data, setData] = useState(undefined);

    useEffect(() => {
        const get = async()=>{
            const res = await fetch('http://localhost:3500/api/ufc/fighters').then(res=>res.json());
            setData(res);
        };
        get();
    }, []);
    

    return (
        <>
            <h1>{location.pathname}</h1>
            {data ?data.map(div=><FighterDivisionTable key={uuid()} div={div}/>) :<h2>NADA</h2>}
        </>
    )
};