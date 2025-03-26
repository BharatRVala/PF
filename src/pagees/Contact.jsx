import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="container max-w-6xl mx-auto my-5 p-4 sm:p-5 bg-[rgba(90,89,85,0.35)] rounded-xl shadow-2xl backdrop-blur-md">
      <h1 className="text-3xl sm:text-4xl md:text-5xl text-center text-gray-200 mb-5">Contact Me</h1>
      <hr className="border-gray-600 my-4" />
      
      <div className="contact-container max-w-md mx-auto my-8 sm:my-10 p-4 sm:p-6 rounded-xl">
        <form onSubmit={handleSubmit} className="flex flex-col">
          <label htmlFor="name" className="font-bold text-white mb-1 text-base sm:text-lg">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="p-2 sm:p-3 mb-3 sm:mb-4 border border-gray-300 rounded-lg focus:border-yellow-400 outline-none text-base sm:text-lg"
          />

          <label htmlFor="email" className="font-bold text-white mb-1 text-base sm:text-lg">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="p-2 sm:p-3 mb-3 sm:mb-4 border border-gray-300 rounded-lg focus:border-yellow-400 outline-none text-base sm:text-lg"
          />

          <label htmlFor="message" className="font-bold text-white mb-1 text-base sm:text-lg">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="p-2 sm:p-3 mb-3 sm:mb-4 border border-gray-300 rounded-lg min-h-[100px] focus:border-yellow-400 outline-none text-base sm:text-lg"
          />

          <button 
            type="submit" 
            className="bg-blue-500 text-white p-2 sm:p-3 rounded-lg text-lg sm:text-xl hover:bg-blue-700 hover:translate-y-[-2px] active:scale-95 transition-all"
          >
            Send Message
          </button>
        </form>

        {submittedData && (
          <div className="submitted-data mt-4 sm:mt-6 text-white text-base sm:text-lg">
            <h2 className="text-lg sm:text-xl font-bold mb-2">Successfully sent</h2>
            <p><strong>Name:</strong> {submittedData.name}</p>
            <p><strong>Email:</strong> {submittedData.email}</p>
            <p><strong>Message:</strong> {submittedData.message}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Contact;