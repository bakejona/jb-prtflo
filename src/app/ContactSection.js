"use client"
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FiSend } from 'react-icons/fi';
import { IoCheckmarkCircle } from 'react-icons/io5';
import styles from './ContactSection.module.css';

const ContactSection = () => {
  const [name, setName]       = useState('');
  const [email, setEmail]     = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent]   = useState(false);
  const [errors, setErrors]   = useState({});
  const [shake, setShake]     = useState({});
  const [mouse, setMouse]     = useState({ x: 50, y: 50 });
  const sectionRef = useRef(null);

  const handleMouseMove = (e) => {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    setMouse({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top)  / rect.height) * 100,
    });
  };

  const handleInputFocus = () => {
    if (isSent) setIsSent(false);
  };

  const triggerShake = (fields) => {
    const s = {};
    fields.forEach(f => (s[f] = true));
    setShake(s);
    setTimeout(() => setShake({}), 600);
  };

  const validate = () => {
    const e = {};
    if (!name.trim())    e.name    = true;
    if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) e.email = true;
    if (!message.trim()) e.message = true;
    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      triggerShake(Object.keys(errs));
      return;
    }
    setErrors({});
    setIsSubmitting(true);

    // Variables match EmailJS template placeholders: {{name}}, {{email}}, {{message}}
    emailjs
      .send(
        'service_xqukd3x',
        'template_l85jbfn',
        { name, email, message },
        'frXLL8taZu9OlOKfW'
      )
      .then(() => {
        setIsSent(true);
        setName('');
        setEmail('');
        setMessage('');
      })
      .catch((error) => {
        console.error('FAILED...', error.text);
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className={styles.contactSection}
      onMouseMove={handleMouseMove}
    >
      <div
        className={styles.orb1}
        style={{ left: `${mouse.x}%`, top: `${mouse.y}%` }}
      />
      <div
        className={styles.orb2}
        style={{ left: `${100 - mouse.x * 0.6}%`, top: `${100 - mouse.y * 0.7}%` }}
      />

      <form className={styles.formContainer} onSubmit={handleSubmit} noValidate>
        <div className={styles.formText}>
          <h1 className={styles.heading}>Contact Me</h1>
          <p className={styles.subheading}>Have any questions or want to get in touch? Feel free to reach out!</p>
        </div>

        <input
          type="text"
          placeholder="Your name"
          value={name}
          onFocus={handleInputFocus}
          onChange={(e) => { setName(e.target.value); setErrors(prev => ({ ...prev, name: false })); }}
          className={`${styles.formInput} ${errors.name ? styles.inputError : ''} ${shake.name ? styles.shake : ''}`}
        />
        <input
          type="email"
          placeholder="Your email"
          value={email}
          onFocus={handleInputFocus}
          onChange={(e) => { setEmail(e.target.value); setErrors(prev => ({ ...prev, email: false })); }}
          className={`${styles.formInput} ${errors.email ? styles.inputError : ''} ${shake.email ? styles.shake : ''}`}
        />
        <textarea
          placeholder="Your message"
          value={message}
          onFocus={handleInputFocus}
          onChange={(e) => { setMessage(e.target.value); setErrors(prev => ({ ...prev, message: false })); }}
          className={`${styles.formInput} ${errors.message ? styles.inputError : ''} ${shake.message ? styles.shake : ''}`}
        />

        <button
          type="submit"
          className={`${styles.submitButton} ${isSubmitting ? styles.filling : ''} ${isSent ? styles.sent : ''}`}
          disabled={isSubmitting || isSent}
        >
          <span className={styles.iconWrap}>
            <FiSend className={`${styles.planeIcon} ${isSent ? styles.planeOut : ''}`} />
            <IoCheckmarkCircle className={`${styles.checkIcon} ${isSent ? styles.checkIn : ''}`} />
          </span>
        </button>
      </form>
    </section>
  );
};

export default ContactSection;
