import React, { useState } from 'react';
const dropdown = () =>{

const [selectedOption,setselectedoption ] = useState('');
const handlechange = (event)=>{
    setselectedoption(event.target.value);
};
return (
    <div>
        <h1>dropdown list </h1>
        <select value= {selectedOption} onChange={handlechange}> 
            <option value =""> select option</option>
            <option value = "option1"> Option1</option>
            <option value = "option2"> Option2</option>
        </select>
        <p>selected option: {selectedOption}</p>
    </div>
);
};