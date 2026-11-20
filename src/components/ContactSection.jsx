import { useState } from 'react';
import { motion } from 'framer-motion';
import './ContactSection.css';

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      alert('Error: Please fill all fields before transmitting.');
      return;
    }
    
    setStatus('sending');

    try {
      const response = await fetch('https://formsubmit.co/ajax/manish.sskala48@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
          _subject: `New Connection from ${form.name} - Portfolio`
        })
      });

      if (response.ok) {
        setStatus('success');
        setForm({ name: '', email: '', message: '' });
        alert('Transmission Successful! Data received by system.');
      } else {
        setStatus('error');
        alert('Transmission Failed! Error during signal routing.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('error');
      alert('Transmission Failed! Connection error.');
    } finally {
      if (status !== 'success') {
         setStatus('');
      } else {
         setTimeout(() => setStatus(''), 3000);
      }
    }
  };

  return (
    <section className="sa-section contact" id="uplink">
      <div className="sa-container">
        <motion.div 
          className="contact__inner"
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >

          <p className="sa-section-label">Section_04 // Direct_Uplink</p>
          <h2 className="contact__title">Establish Connection</h2>

          <form className="contact__form" onSubmit={handleSubmit}>

            <div className="contact__row">
              <div className="contact__field">
                <label className="contact__label" htmlFor="name">Terminal_ID</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="contact__input"
                  placeholder="AUTH_ID // NAME"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="contact__field">
                <label className="contact__label" htmlFor="email">Signal_Source</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="contact__input"
                  placeholder="COMMS_CHANNEL // EMAIL"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="contact__field">
              <label className="contact__label" htmlFor="message">Transmission_Data</label>
              <textarea
                id="message"
                name="message"
                className="contact__textarea"
                placeholder="DATA_PACKET // MESSAGE"
                rows={4}
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="contact__submit" disabled={status === 'sending'}>
              {status === 'sending' ? 'Transmitting...' : 'Transmit Data'}
            </button>

          </form>
        </motion.div>
      </div>
    </section>
  );
}
