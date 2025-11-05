// contact.tsx
'use client';

// Imports
import React, { FormEvent, useState } from 'react';
import emailjs from '@emailjs/browser';
// Local Imports
import styles from './contact.module.scss';

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    description: '',
  });
  const [errors, setErrors] = useState<any>({});
  const [formStatus, setFormStatus] = useState<FormStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');

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
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Limpiar mensajes previos
    setErrorMessage('');
    setErrors({});

    const isValid = validateForm();

    if (!isValid) {
      return;
    }

    setFormStatus('loading');

    try {
      // Obtener las variables de entorno
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      // Verificar que existan las credenciales
      if (!serviceId || !templateId || !publicKey) {
        throw new Error(
          'Configuración de email incompleta. Por favor contacte al administrador.'
        );
      }

      // Enviar el email usando EmailJS
      const response = await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.description,
          to_name: 'Snow',
        },
        publicKey
      );

      if (response.status === 200) {
        setFormStatus('success');
        // Limpiar el formulario
        setFormData({
          name: '',
          email: '',
          description: '',
        });

        // Reset status después de 5 segundos
        setTimeout(() => {
          setFormStatus('idle');
        }, 5000);
      }
    } catch (error: any) {
      console.error('Error submitting form:', error);
      setFormStatus('error');
      setErrorMessage(
        error.message || 'Error al enviar el mensaje. Por favor intente nuevamente.'
      );

      // Reset status después de 5 segundos
      setTimeout(() => {
        setFormStatus('idle');
        setErrorMessage('');
      }, 5000);
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

    // Limpiar error del campo cuando el usuario empiece a escribir
    if (errors[name]) {
      setErrors((prevErrors: any) => ({
        ...prevErrors,
        [name]: '',
      }));
    }
  };

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Contacto</h3>
      <form onSubmit={handleSubmit} className={styles.formContainer}>
        {/* Mensaje de éxito */}
        {formStatus === 'success' && (
          <div className={styles.successMessage}>
            Mensaje enviado correctamente! Te responderemos pronto.
          </div>
        )}

        {/* Mensaje de error general */}
        {formStatus === 'error' && errorMessage && (
          <div className={styles.errorMessage}>
            {errorMessage}
          </div>
        )}

        <div className={styles.inputContainer}>
          <label>Nombre</label>
          <input
            autoComplete="off"
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            disabled={formStatus === 'loading'}
          />
          {errors.name && <small>{errors.name}</small>}
        </div>
        <div className={styles.inputContainer}>
          <label>Correo</label>
          <input
            autoComplete="off"
            autoSave="false"
            type="text"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            disabled={formStatus === 'loading'}
          />
          {errors.email && <small>{errors.email}</small>}
        </div>
        <div className={styles.inputContainer}>
          <label>Descripción</label>
          <textarea
            name="description"
            required
            value={formData.description}
            onChange={handleChange}
            disabled={formStatus === 'loading'}
          />
          {errors.description && <small>{errors.description}</small>}
        </div>
        <button
          type="submit"
          className={styles.button}
          disabled={formStatus === 'loading'}
        >
          {formStatus === 'loading' ? 'Enviando...' : 'Enviar'}
        </button>
      </form>
    </div>
  );
};

export default Contact;
