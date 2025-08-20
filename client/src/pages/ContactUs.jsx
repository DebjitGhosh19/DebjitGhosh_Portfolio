import React, { useState } from 'react'
import Rotate from "react-reveal/Rotate";
import axios from 'axios';
import { toast } from 'react-toastify';
const ContactUs = () => {
  // This component renders a contact form with fields for name, email, and message.
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async(e) => {
 
    e.preventDefault();
 
    //Api call using axios
    try {
      const response = await axios.post('http://localhost:8080/api/v1/portfolio/sendEmail', {
      name,
      email,
      message
    });
     
      if (response.data.status === 'success') {
        toast.success(response.data.message);
      } else {
        toast.error('Error sending email');
      }
      
    } catch (error) {
      toast.error('Error sending email');
    }
   
   
 
    // Reset the form fields
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <Rotate  left>
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-100 py-10 px-5" id="contact">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-indigo-700 mb-8">
          Contact Us
        </h1>
        <div className="bg-white rounded-lg shadow-lg p-8">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-200"
                placeholder="Enter your full name"
                required
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-200"
                placeholder="Enter your email address"
                required
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="6"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-200 resize-none"
                placeholder="Enter your message here..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
            
            <div className="text-center">
              <button
                type="submit"
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-200 transform hover:scale-105 shadow-md cursor-pointer" onClick={handleSubmit}
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    </Rotate>
  )
}

export default ContactUs