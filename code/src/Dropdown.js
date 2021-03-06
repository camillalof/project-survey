import React from 'react'

export const Dropdown = (props) => (
    <form className="treatment">
      <h2>How did you find us?</h2>
        <select
          className="select"
          onChange={(event) => props.setFind(event.target.value)}
          value={props.find}
        >
          <option value="">Select option here:</option>
          <option value="social media">social media</option>
          <option value="a friend">a friend</option>
          <option value="google">google</option>
        </select> 
    </form>
    );