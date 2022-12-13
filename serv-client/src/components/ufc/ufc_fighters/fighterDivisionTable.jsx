import React from 'react'
import {v4 as uuid} from 'uuid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil, faPlus, faRemove } from '@fortawesome/free-solid-svg-icons';

export default function FighterDivisionTable({div}) {
    const {division,  fighters} = div;   
    
    // constante para no crear otro componente externo; asi no creo tantos archivos inescesariametne
    const FighterElement = ({e})=>{
        return(
            <>
                <section className='fighter_options'>
                    <p>{e.name}</p>
                    <div className='buttons'>
                        <FontAwesomeIcon icon={faPencil}/>
                        <FontAwesomeIcon icon={faRemove}/>
                    </div>
                </section>
                <p>{e.nick}</p>
                <p>{e.weight}</p>
                <p>{e.age}</p>
                <p>{e.country}</p>
                <p>{e.rank}</p>
                <p>{e.record}</p>
            </>    
        );  
    };

    return (
        <>
            <div className='fighter-division'>
                <section className='division_section'>
                    <h2>Division: {division}</h2>
                    <FontAwesomeIcon icon={faPlus} />
                </section>
                <article className='table'>                    
                    <p className='header_elements'>name</p>
                    <p className='header_elements'>nick</p>
                    <p className='header_elements'>weight</p>
                    <p className='header_elements'>age</p>
                    <p className='header_elements'>country</p>
                    <p className='header_elements'>rank</p>
                    <p className='header_elements'>record</p>
                    {fighters.map(fighter => <FighterElement key={uuid()} e={fighter}/>)}                    
                </article>
            </div>
        </>
    )
}
