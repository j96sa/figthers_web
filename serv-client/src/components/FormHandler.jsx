import React from 'react'
import { useState } from 'react';
import {v4 as uuid} from 'uuid';

export default function FormHandler() {
    
    // state (FORM) for handdle the users
    const [formData, setFormData] = useState({
        id:"", 
        name:"", 
        nick:"", 
        weight:"", 
        age:"", 
        country:"", 
        rank:"", 
        record:""
    });


    // const for handler the changes in the form
    const handleChange = event => {
        const { name, value } = event.target;
        setFormData(prevData => ({ ...prevData, [name]: value }));
    };


    // const for send the data froom the form to the api
    const handleSubmit = event => {
        event.preventDefault();
        console.log(formData);
    };
    

    return (
        <>
            <form onSubmit={handleSubmit}>
            <label htmlFor="id">ID</label>
            <input
              type="text"
              id="id"
              name="id"
              value={formData.id}
              onChange={handleChange}
            />
            <br />
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            <br />
            <label htmlFor="nick">Nickname</label>
            <input
              type="text"
              id="nick"
              name="nick"
              value={formData.nick}
              onChange={handleChange}
            />
            <br />
            <label htmlFor="nick">Weight</label>
            <input
              type="text"
              id="weight"
              name="weight"
              value={formData.weight}
              onChange={handleChange}
            />
            <br />
            <label htmlFor="age">Age</label>
            <input
              type="number"
              id="age"
              name="age"
              value={formData.age}
              onChange={handleChange}
            />
            <br />
            <label htmlFor="rank">Rank</label>
            <input
              type="number"
              id="rank"
              name="rank"
              value={formData.rank}
              onChange={handleChange}
            />
            <br />
            <label htmlFor="country">Country</label>
            <input
              type="text"
              id="country"
              name="country"
              value={formData.country}
              onChange={handleChange}
            />
            <br />
            <label htmlFor="record">Record</label>
            <input
              type="text"
              id="record"
              name="record"
              value={formData.record}
              onChange={handleChange}
            />
            <br />
            <button type="submit">Submit</button>
            </form>
        </>
    );
}
