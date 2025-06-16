import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
      <div className='contact'>
          
      {/* actoin: formspree for massege send to mail */}
          <form action="https://formspree.io/f/xblyyalk" method='POST'>
              <input type="text" placeholder='Enter Your name' name='username'required />
              <input type="email" placeholder='email' name='email' required/>
              <textarea name="messsage" placeholder='Message' required></textarea>
              <button>Submit</button>
          </form>
      
    </div>
  )
}

export default Contact
