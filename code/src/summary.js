import React from 'react'

export const Summary = (props) => {

  const ratingAnswer = () => {
    if (props.rating === 1) {
      return 'unhappy'
    } else if (props.rating === 2) {
      return 'so so'  
    } else if (props.rating === 3) {
      return 'ok'
    } else if (props.rating === 4) {
      return 'happy'
    } else if (props.rating === 5) {
      return 'super happy'    
    } else {
      return ''
    }
  }

  return (
    <section className="summary">
      <h1>Thank you for your participation, {props.name}!</h1>
        <p> Were glad that you found us trough {props.find}</p>
        <p>{props.rating === '' ? 'You choose not to rate us' : `You where ${ratingAnswer()} with our service`}</p>
        <p>{props.feedback.length < 2 ? 'You choose not to leave feedback' : `We will definatly take into consideration that you reccommended us to ${props.feedback}`}</p>
    </section>
  )
}