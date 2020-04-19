import React from 'react'

export const Rating = (props) => {
  return (
    <form className="rating">
      <span className="questionSection">
        <h2>How would you rate your experience?</h2>
      </span>
        <span className="labelSection">
        <label>
          <input
            type="radio"
            value="1"
            onChange={() => props.setRating(1)}
            checked={props.rating === 1} />
              <span role="img" aria-label="One star">
                🌟 
              </span>
        </label>
        <label>
          <input 
            type="radio" 
            value="2" 
            onChange={() => props.setRating(2)}
            checked={props.rating === 2} />
              <span role="img" aria-label="Two stars">
                🌟 
              </span>
        </label>
        <label>
          <input 
            type="radio" 
            value="3" 
            onChange={() => props.setRating(3)}
            checked={props.rating === 3} />
              <span role="img" aria-label="Three stars">
                🌟 
              </span>
        </label>
        <label>
          <input 
            type="radio" 
            value="4" 
            onChange={() => props.setRating(4)}
            checked={props.rating === 4} />
              <span role="img" aria-label="four stars">
               🌟
              </span>
        </label>
        <label>
          <input 
            type="radio" 
            value="5" 
            onChange={() => props.setRating(5)}
            checked={props.rating === 5} />
              <span role="img" aria-label="Five stars">
               🌟 
              </span>
        </label>
        </span>
      </form>
    )
}