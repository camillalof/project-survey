import React, { useState } from 'react'

import { Summary } from './summary.js'
import { Rating } from './Rating.js'
import { Input } from './Input'
import { Dropdown } from './Dropdown'
import { Textarea } from './Textarea'


export const App = () => {
  const [rating, setRating] = useState('')
  const [name, setName] = useState('')
  const [showResult, setShowResult] = useState(false)
  const [question, setQuestion] = useState('name')
  const [find, setFind] = useState("")
  const [error, setError] = useState(false)
  const [feedback, setFeedback] = useState('')
  

  const handleSubmitOrContinue = (event) => {
    event.preventDefault()
 
    if (question === 'name') {
      setQuestion('find') 
    } else if (question === 'find') {
      setQuestion('rating')
    } else if (question === 'rating') {
      setQuestion('feedback')
    } else {
      // do the actualy submit.
      setShowResult(true)
    }

    if (name.length <= 2) {
      setQuestion('name')
      setError(true)
    }
  } 

  return (
  <main>
    {showResult && (
      <Summary 
        name={name} 
        find={find}
        rating={rating}
        feedback={feedback} 
      />
    )}
    {!showResult && (
      <form onSubmit={handleSubmitOrContinue}> 
      {question === 'name' && (
        <span className="question">
          {!error && (
            <span className="valid">
              <h2>Welcome to us, whats your name?*</h2>
              <Input 
                placeholder="Type name here..."
                value={name}
                setValue={setName} 
              />
            </span>  
          )}  
          {error && (
            <span className="error">
              <h2>Welcome to us, whats your name?*</h2>
              <Input 
                placeholder="** name required"
                value={name}
                setValue={setName} 
              />
            </span>  
          )}  

        </span>
      )}
      {question === 'find' && (
        <span className="question">
          <h2>How did you find us?</h2>
            <Dropdown
              find={find}
              setFind={setFind}
            />
          <button type="submit">
            Continue
          </button> 
        </span>
      )}
      {question === 'rating' && (
        <span className="question">
          <h2>How would you rate your experience?</h2>
            <Rating 
              rating={rating} 
              setRating={setRating} />
        </span>
      )}
      {question === 'feedback' && (
        <span className="question">
          <h2>Is there something that we could of done better?</h2>
            <Textarea 
                placeholder="Type your feedback here..."
                value={feedback}
                setValue={setFeedback} 
              />
        </span>
      )}
      {question !== 'find' && (
        <button type="button" onClick={handleSubmitOrContinue}>
          Continue 
        </button>
      )} 
    </form>
    )}
  </main>  
  )
}
