import React, { useEffect } from 'react'
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {v4 as uuid} from 'uuid';

export default function FormHandler() {
  const {id, division, sport} = useParams();
  const navigate = useNavigate();
  // this state controll wich operation we must do
  const [put, setPut] = useState(false);

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


  // effect to modify the state put
  useEffect(() => {
    id && setPut(true);
  }, []);
  


  // to get the fighter data from the API and insert it in the FORM if is the operation to do
  useEffect(() => {
    put &&
    fetch(`http://localhost:3500/api/${sport}/fighters/${division}/${id}`)
    .then(res => res.json())
    .then(res => {
      // 
      console.log(res);
      // 
      const {age, country, id, name, nick, rank, record, weight} = res;
      setFormData({id, age, country, name, nick, rank, record, weight});
    })
    .catch(err => console.log(err));

  }, [put]);


  // const for handler the changes in the form
  const handleChange = event => {
    const { name, value } = event.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };


  // const for send the data from the form to the api
  const handleSubmit = event => {
    event.preventDefault();
    
    put 
    // request to PUT a fighter
    ?fetch(`http://localhost:3500/api/${sport}/fighters/${division}/${id}`, {
      method:'PUT',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify(formData)
    })
    .then(res => res.json())
    // .then(data => console.log(data))
    .catch(err => console.log(err.message))

    
    // request to POST a fighter
    :fetch(`http://localhost:3500/api/${sport}/fighters/${division}`, {
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({...formData, id:uuid()})
    })
    .then(res => res.json())
    // .then(data => console.log(data))
    .catch(err => console.log(err.message));

    // const to return to the component of all-fighters
    navigate(-1);
  };

  
  return (
    <>
      <form onSubmit={handleSubmit}>
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
        type="text"
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
