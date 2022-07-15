import React, { useRef } from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser';


function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_5rmiiaw', 'template_h7hkxi6', form.current, 'iahb9t792JtG9_Q9g')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
    }
    return (
        <div className="contact">
            <h2>Contact Form</h2>
            <form ref={form} onSubmit={sendEmail} className="contact__form">
                <label htmlFor="name">Name: </label>
                <input id="name" name="name" type="text" required/>
                <label htmlFor="phone">Phone: </label>
                <input id="phone" name="phone" type="tel" />
                <label htmlFor="email">Email: </label>
                <input id="email" name="email" type="email" required/>
                <label htmlFor="description">Concerns: </label>
                <textarea id="description" name="description" type="text" required>
                </textarea>
                <button type="submit" className='contact_btn'>Send Message</button>
            </form>
        </div>
    )
}

export default Contact
