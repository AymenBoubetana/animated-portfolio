import "./Contact.scss";
import { motion } from "framer-motion";
import  { useRef,useState } from 'react';
import emailjs from '@emailjs/browser';
const Contact = () => {
  const form = useRef();
  const [err,setErr]=useState(false);
  const [succ,setSucc]=useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_yp4qvwo', 'template_mydrk93', form.current, {
        publicKey: 'XstRUj7gAIzN2jCHA',
      })
      .then(
        (result) => {
          console.log('SUCCESS!');
          setSucc(true);
        },
        (error) => {
          console.log('FAILED...', error.text);
          setErr(true);
        },
      );
  };
  return (
    <div className="contact">
      <div className="text">
        <h1>Get In Touch</h1>
        <div className="tarb">
          <div className="tartib">
            <h2>E-mail</h2>
            <p>
              <a href="">boubetana.aymen@gmail.com</a>
            </p>
          </div>
          <div className="tartib">
            <h2>Phone</h2>
            <p>
              <a href="">+212 648508416</a>
            </p>
          </div>
          <div className="tartib">
            <h2>Adress</h2>
            <p>
              <a href="">Douar El iraki Draou gang.</a>
            </p>
          </div>
        </div>
      </div>
      
      <form action="" className="contact-form" ref={form} onSubmit={sendEmail}>
        <h1>Make sure to leave us a message <span>&#10084;</span></h1>
        <input type="text" placeholder="Full name"  name="name"/>
        <input type="email" placeholder="E-mail" name="email" />
        <textarea
          name="message"
          id=""
          cols="30"
          rows="10"
          placeholder="message"
        ></textarea>
        <button type="submit" className="submit">
          Submit
        </button>
        {err && "Error sorry"}
        {succ && "Thanks it's done"}
        </form>
    </div>
  );
};

export default Contact;
