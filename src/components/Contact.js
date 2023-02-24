import React from 'react'
import email from './assets/email.png'
import linkedin from './assets/linkedin.png'
import github from './assets/github.png'

const Contact = () => {
  return (
    <section className="contact" id="Contact">
      <h2>Get in touch</h2>
      <div className="links">
        <p><a className="email" href="mailto:ayo.afolabi.24@gmail.com"><img src={email} alt=""></img></a></p>
        <p><a className="linkedin" href="https://linkedin.com/in/ayo-afolabi"><img src={linkedin} alt=""></img></a></p>
        <p><a className="github" href="https://github.com/A-Afolabi"><img src={github} alt=""></img></a></p>
      </div>
    </section>
  )
}

export default Contact