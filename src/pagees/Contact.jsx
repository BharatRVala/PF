import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    Name: '',
    Email: '',
    Massage: '',
  });

  const [submittedData, setSubmittedData] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await fetch('https://pfcontact-git-master-bharat-valas-projects.vercel.app/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      const result = await response.json();
      setSubmittedData(result);
      setFormData({ Name: '', Email: '', Massage: '' });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container max-w-6xl mx-auto my-5 p-4 sm:p-5 bg-[rgba(90,89,85,0.35)] rounded-xl shadow-2xl backdrop-blur-md">
      <h1 className="text-3xl sm:text-4xl md:text-5xl text-center text-gray-200 mb-5">Contact Me</h1>
      <hr className="border-gray-600 my-4" />

      <div className="contact-container max-w-md mx-auto my-8 sm:my-10 p-4 sm:p-6 rounded-xl">
        <form onSubmit={handleSubmit} className="flex flex-col">
          <label htmlFor="Name" className="font-bold text-white mb-1 text-base sm:text-lg">Name:</label>
          <input
            type="text"
            id="Name"
            name="Name"
            value={formData.Name}
            onChange={handleChange}
            required
            className="p-2 sm:p-3 mb-3 sm:mb-4 border border-gray-300 rounded-lg focus:border-yellow-400 outline-none text-base sm:text-lg"
          />

          <label htmlFor="Email" className="font-bold text-white mb-1 text-base sm:text-lg">Email:</label>
          <input
            type="email"
            id="Email"
            name="Email"
            value={formData.Email}
            onChange={handleChange}
            required
            className="p-2 sm:p-3 mb-3 sm:mb-4 border border-gray-300 rounded-lg focus:border-yellow-400 outline-none text-base sm:text-lg"
          />

          <label htmlFor="Massage" className="font-bold text-white mb-1 text-base sm:text-lg">Message:</label>
          <textarea
            id="Massage"
            name="Massage"
            value={formData.Massage}
            onChange={handleChange}
            required
            className="p-2 sm:p-3 mb-3 sm:mb-4 border border-gray-300 rounded-lg min-h-[100px] focus:border-yellow-400 outline-none text-base sm:text-lg"
          />

          <button 
            type="submit" 
            className="bg-blue-500 text-white p-2 sm:p-3 rounded-lg text-lg sm:text-xl hover:bg-blue-700 hover:translate-y-[-2px] active:scale-95 transition-all"
            disabled={loading}
          >
            {loading ? 'Sending...' : 'Send Message'}
          </button>
        </form>

        {error && <p className="text-red-500 mt-4">{error}</p>}

        {submittedData && (
          <div className="submitted-data mt-4 sm:mt-6 text-white text-base sm:text-lg">
            <h2 className="text-lg sm:text-xl font-bold mb-2">Successfully sent</h2>
            <p><strong>Name:</strong> {submittedData.Name}</p>
            <p><strong>Email:</strong> {submittedData.Email}</p>
            <p><strong>Message:</strong> {submittedData.Massage}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Contact;
