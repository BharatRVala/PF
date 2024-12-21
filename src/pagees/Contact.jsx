import React, { useState } from 'react';
import '../App.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submittedData, setSubmittedData] = useState(null); // State to store submitted data
  const [loading, setLoading] = useState(false); // State to track loading status
  const [error, setError] = useState(null); // State to track error status

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null); // Reset error state on each submit

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/create`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          Name: formData.name,
          Email: formData.email,
          Massage: formData.message,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmittedData(result); // Set the submitted data on success
        setFormData({ name: '', email: '', message: '' }); // Reset form
      } else {
        throw new Error(result.error || 'Something went wrong');
      }
    } catch (error) {
      setError(error.message); // Set error message
    } finally {
      setLoading(false); // Stop loading after the request is complete
    }
  };

  return (
    <div className="container">
      <h1 className="home-title">Contact Me</h1>
      <hr />
      <div className="contact-container">
        <form onSubmit={handleSubmit} className="contact-form">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />

          <button type="submit" className="submit-btn" disabled={loading}>
            {loading ? 'Sending...' : 'Send Message'}
          </button>
        </form>

        {/* Render submitted data */}
        {submittedData && (
          <div className="submitted-data">
            <h2>Successfully sent data!</h2>
            <p><strong>Name:</strong> {submittedData.Name}</p>
            <p><strong>Email:</strong> {submittedData.Email}</p>
            <p><strong>Message:</strong> {submittedData.Massage}</p>
          </div>
        )}

        {/* Render error message */}
        {error && (
          <div className="error-message">
            <p>Error: {error}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Contact;
