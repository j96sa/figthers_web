import React from 'react'
import {useLocation, useNavigate} from 'react-router-dom'


export default function MainPage() {
    const location = useLocation();
    const navigate = useNavigate();


    return (
        <>
            <h1>{location.pathname}</h1>

            <div className='main_page'>
                <section className='ufc'>
                    <h2 onClick={()=>navigate('/ufc/fighters')}>UFC FIGHTERS</h2>
                    <h2 onClick={()=>navigate('/ufc/events')}>UFC EVENTS</h2>
                </section>

                <section className='box'>
                    <h2 onClick={()=>navigate('/box/fighters')}>BOX FIGHTERS</h2>
                    <h2 onClick={()=>navigate('/box/events')}>BOX EVENTS</h2>
                </section>
            </div>
        </>    
    )
}
