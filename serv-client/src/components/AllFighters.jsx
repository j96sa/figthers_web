import React, { useEffect, useState } from 'react'
import {useLocation, useNavigate, useParams} from 'react-router-dom'
import FighterDivisionTable from './fighterDivisionTable';
import {v4 as uuid} from 'uuid'


export default function UFCAllFighters() {
    const location = useLocation();
    const navigate = useNavigate();
    const params = useParams();

    const [data, setData] = useState(undefined);
    const [url, setUrl] = useState(undefined);
    // const [sportparam, setSportparam] = useState(params.sport)

    useEffect(() => {
        const sport = params.sport; 

        if (sport === 'ufc'){
            setUrl('http://localhost:3500/api/ufc/fighters');
        }else{
            setUrl('http://localhost:3500/api/box/fighters');
        };
    }, [location]);
    

    useEffect(() => {
        const get = async()=>{

            const res = await fetch(url).then(res=>res.json());
            setData(res);
        };
        get();
    }, [url]);

    return (
        <>
            <h1>ALL FIGHTERS</h1>
            <h1>{location.pathname}</h1>
            {data ?data.map(div=><FighterDivisionTable key={uuid()} div={div}/>) :<h2>NADA</h2>}
        </>
    )
};