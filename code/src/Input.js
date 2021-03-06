import React from 'react'

export const Input = (props) =>  (
  
  <form className='name'>
    <label>
      {props.label}
      <input
        required
        type="text"
        name="text"
        placeholder={props.placeholder}
        value={props.value}
        onChange={(event) => props.setValue(event.target.value)} 
      />
    </label>
  </form>
)