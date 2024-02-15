import React, { useRef } from 'react';
import { Form, Pic } from "./style";
import { Footer } from "../components";
import emailjs from '@emailjs/browser';


const Contact = () => {

  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_vv5ispi', 'template_eerodal', formRef.current, 'FIiGWKtt_1_wZbuQ1')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  
  return (
    <>
      <Pic className="pic">
          <Form ref={formRef} onSubmit={sendEmail}>
        <h1>Send Us a Message</h1>
            <input
              type="text"
              name="name"
              placeholder="Enter your Name"
              autoComplete="on"
              required
              value=''
              onChange={(e) => ( e.target.value)}
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              autoComplete="on"
              required
            />
            <textarea
              name="messge"
              cols="30"
              rows="10"
              placeholder="Type your message"
              required
            >
            </textarea>
            
            <button type="submit">Send</button>
          </Form>
      </Pic>
      <Footer/>
    </>
  );
};

export default Contact;
