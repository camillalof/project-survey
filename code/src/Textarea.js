import React from 'react'

export const Textarea = (props) =>  (
  
  <form className='feedback'>
    <span className="feedbackSection">
      <h2>Is there something that we could of done better?</h2>
    </span>
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