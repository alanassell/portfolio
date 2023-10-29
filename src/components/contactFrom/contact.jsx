import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css';

export const ContactUs = () => { 
  const form = useRef();

  const [processing,setProcessing] = useState("")

  const YOUR_SERVICE_ID = "service_1lgnv51"
  const YOUR_TEMPLATE_ID = "template_uzbyi62" 
  const YOUR_PUBLIC_KEY = "KyLTQijxKKxS9JlR_"

  const sendEmail = (e) => {
    e.preventDefault();
    const name = form.current.user_name.value;
    const email = form.current.user_email.value;
    const message = form.current.message.value;

    if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
      alert("debe completar todos los datos")
      return;
    }else{
        setProcessing("processing")
        emailjs.sendForm(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, form.current, YOUR_PUBLIC_KEY)
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
    }

  };

  return (
    <form ref={form} className='formContact'onSubmit={sendEmail}>
      <input type="text" name="user_name" placeholder='Nombre'/>
      <input type="email" name="user_email" placeholder='Email'/>
      <div className='d-flex'>
        <input className='message' name="message" placeholder='Mensaje'/>

        <button class={`submitButton ${processing}`} type="submit" value="Send">
            <span>Enviar</span>
            <svg viewBox="0 0 15 13">
                <polyline points="2 6.5 6 10.5 13 2.5"></polyline>
            </svg>
        </button>
      </div>
    </form>
  );
};