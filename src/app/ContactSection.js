"use client"
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import styles from './ContactSection.module.css';

const ContactSection = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = {
      name,
      email,
      message,
    };

    emailjs
      .send(
        'service_xqukd3x',
        'template_l85jbfn',
        formData,
        'frXLL8taZu9OlOKfW'
      )
      .then(
        (result) => {
          console.log('SUCCESS!', result.text);
          setIsSent(true);
          setName('');
          setEmail('');
          setMessage('');
        },
        (error) => {
          console.error('FAILED...', error.text);
          setIsSent(false);
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <section id="contact" className={styles.contactSection}>
      <form className={styles.formContainer} onSubmit={handleSubmit}>
        <div className={styles.formText}>
          <h1>Contact Me 📝</h1>
          <p>Have any questions or want to get in touch? Feel free to reach out!</p>
        </div>

        <input
          type="text"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className={styles.formInput} // Changed to local class
        />
        <input
          type="email"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className={styles.formInput} // Changed to local class
        />
        <textarea
          placeholder="Your message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          className={styles.formInput} // Changed to local class
        ></textarea>
        
        <button type="submit" className={styles.submitButton} disabled={isSubmitting}>
          {isSubmitting ? 'Sending...' : isSent ? 'Sent ✅' : 'Send'}
        </button>
      </form>
      
      {responseMessage && <p>{responseMessage}</p>}
    </section>
  );
};

export default ContactSection;