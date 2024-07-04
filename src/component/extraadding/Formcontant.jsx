import React from 'react'

function Formcontant() {
  return (
    <div className='form'>
      <h1 className='contact'>Contact.</h1>
        <form >
            <label>Your name</label>
            <input type="text"></input>

            <label>Email</label>
            <input type="email"></input>

            <label>Subjects</label>
            <input type="text"></input>

            <label>Message</label>
            <textarea rows="6" placeholder='type your message here' />
            <button className='btn'>Submit</button>

        </form>
      
    </div>
  )
}

export default Formcontant;
