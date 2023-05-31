import React, { useState } from 'react';

const Dropdown = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleChange = (event) => {
    setSelectedOption(event.target.value);

    // Send the selected choice to the backend server
    fetch('/display_choice', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ choice: event.target.value }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div>
      <h1>Dropdown List Example</h1>
      <select value={selectedOption} onChange={handleChange}>
        <option value="">Select Option</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
      </select>
      <p>Selected Option: {selectedOption}</p>
    </div>
  );
};

export default Dropdown;
