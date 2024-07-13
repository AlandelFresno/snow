// contact.tsx
'use client';

// Imports
import React, { FormEvent, useEffect, useState } from 'react';
import axios from 'axios';
// Local Imports
import styles from './contact.module.scss';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    description: '',
  });
  const [errors, setErrors] = useState<any>({});
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    validateForm();
  }, [formData]);

  // Validate form
  const validateForm = () => {
    let errors: any = {};

    if (!formData.name) {
      errors.name = 'El nombre es requerido.';
    }

    if (!formData.email) {
      errors.email = 'El mail es requerido.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'El mail es inválido.';
    }

    if (!formData.description) {
      errors.description = 'La descripción es requerida.';
    }

    setErrors(errors);
    setIsFormValid(Object.keys(errors).length === 0);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    validateForm(); 

    if (isFormValid) {
      try {
        const response = await axios.post(
          `http://localhost:3000/api`,
          formData
        );
        console.log(response);
        console.log('Form submitted successfully!');
      } catch (error) {
        console.error('Error submitting form:', error);
      }
    } else {
      console.log('Form has errors. Please correct them.');
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <div className={styles.container} id="contact">
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre</label>
          <input
            autoComplete="off"
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <small>{errors.name}</small>}
        </div>
        <div>
          <label>Email</label>
          <input
            autoComplete="off"
            type="text"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <small>{errors.email}</small>}
        </div>
        <div>
          <label>Descripción</label>
          <textarea
            name="description"
            required
            value={formData.description}
            onChange={handleChange}
          />
          {errors.description && <small>{errors.description}</small>}
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Contact;
