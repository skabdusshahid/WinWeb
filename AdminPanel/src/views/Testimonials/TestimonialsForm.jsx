import React, { useState } from 'react';
import axios from 'axios';
import Http from '../../Http';
import './TestimonialsForm.css'; // Import the CSS file

const TestimonialsForm = () => {
  const [formData, setFormData] = useState({
    testimonialsHeader: { title: '', subTitle: '' },
    testimonials: { clientName: '', clientDesignation: '', message: '' },
  });

  const handleInputChange = (e) => {
    const { name, value, dataset } = e.target;
    if (dataset.type === 'header') {
      setFormData({
        ...formData,
        testimonialsHeader: { ...formData.testimonialsHeader, [name]: value },
      });
    } else {
      setFormData({
        ...formData,
        testimonials: { ...formData.testimonials, [name]: value },
      });
    }
  };

  const handleHeaderSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${Http}/testimonials-header`, formData.testimonialsHeader);
      alert('Testimonials Header submitted successfully');
    } catch (error) {
      console.error('Error submitting Testimonials Header:', error);
      alert('Error submitting Testimonials Header');
    }
  };

  const handleTestimonialsSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${Http}/testimonials`, formData.testimonials);
      alert('Testimonials submitted successfully');
    } catch (error) {
      console.error('Error submitting Testimonials:', error);
      alert('Error submitting Testimonials');
    }
  };

  return (
    <div className="form-container">
      <form className="testimonials-form">
        <h2>Testimonials Header</h2>
        <div className="form-group">
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={formData.testimonialsHeader.title}
            onChange={handleInputChange}
            data-type="header"
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label>Subtitle:</label>
          <input
            type="text"
            name="subTitle"
            value={formData.testimonialsHeader.subTitle}
            onChange={handleInputChange}
            data-type="header"
            className="form-input"
          />
        </div>
        <button type="button" onClick={handleHeaderSubmit} className="submit-button">Submit Header</button>

        <h2>Testimonials</h2>
        <div className="form-group">
          <label>Client Name:</label>
          <input
            type="text"
            name="clientName"
            value={formData.testimonials.clientName}
            onChange={handleInputChange}
            data-type="testimonial"
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label>Client Designation:</label>
          <input
            type="text"
            name="clientDesignation"
            value={formData.testimonials.clientDesignation}
            onChange={handleInputChange}
            data-type="testimonial"
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label>Message:</label>
          <textarea
            name="message"
            value={formData.testimonials.message}
            onChange={handleInputChange}
            data-type="testimonial"
            className="form-textarea"
          />
        </div>
        <button type="button" onClick={handleTestimonialsSubmit} className="submit-button">Submit Testimonials</button>
      </form>
    </div>
  );
};

export default TestimonialsForm;
