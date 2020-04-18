import React from 'react'

export const Textarea = (props) =>  (
  
  <form className='feedback'>
    <label>
      {props.label}
      <input
        required
        type="textarea"
        name="textarea"
        placeholder={props.placeholder}
        value={props.value}
        onChange={(event) => props.setValue(event.target.value)} 
      />
    </label>
  </form>
)