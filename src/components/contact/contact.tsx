'use client';

import React, { FormEvent, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import styles from './contact.module.scss';

type FormStatus = 'idle' | 'loading' | 'success' | 'error';
type FormErrors = Partial<Record<'name' | 'email' | 'description', string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const MIN_SUBMIT_MS = 1500; // anti-bot: tiempo minimo entre montaje y submit

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    description: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [formStatus, setFormStatus] = useState<FormStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const honeypotRef = useRef<HTMLInputElement>(null);
  const mountedAt = useRef<number>(Date.now());

  const validate = (): FormErrors => {
    const e: FormErrors = {};
    if (!formData.name.trim()) e.name = 'El nombre es requerido.';
    else if (formData.name.length > 80) e.name = 'Máximo 80 caracteres.';

    if (!formData.email.trim()) e.email = 'El mail es requerido.';
    else if (!EMAIL_RE.test(formData.email)) e.email = 'El mail es inválido.';
    else if (formData.email.length > 120) e.email = 'Máximo 120 caracteres.';

    if (!formData.description.trim()) e.description = 'La descripción es requerida.';
    else if (formData.description.length > 2000)
      e.description = 'Máximo 2000 caracteres.';

    return e;
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrorMessage('');
    setErrors({});

    if (honeypotRef.current?.value) return;
    if (Date.now() - mountedAt.current < MIN_SUBMIT_MS) return;

    const fieldErrors = validate();
    if (Object.keys(fieldErrors).length > 0) {
      setErrors(fieldErrors);
      return;
    }

    setFormStatus('loading');

    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error('Configuración de email incompleta. Contactá al administrador.');
      }

      const response = await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.description,
          to_name: 'Snow',
          time: new Date().toLocaleString('es-AR'),
        },
        publicKey
      );

      if (response.status === 200) {
        setFormStatus('success');
        setFormData({ name: '', email: '', description: '' });
        setTimeout(() => setFormStatus('idle'), 5000);
      }
    } catch (err) {
      const msg =
        err instanceof Error
          ? err.message
          : 'Error al enviar el mensaje. Intentá nuevamente.';
      setFormStatus('error');
      setErrorMessage(msg);
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
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const isLoading = formStatus === 'loading';

  return (
    <section id="contact" className={styles.section} aria-labelledby="contact-heading">
      <div className={styles.inner}>
        <div className={styles.intro}>
          <span className={styles.eyebrow}>Contacto</span>
          <h2 id="contact-heading" className={styles.title}>
            Contanos qué <em>se rompió.</em>
          </h2>
          <p className={styles.lede}>
            Diagnóstico, presupuesto o emergencia. Respondemos en el día.
          </p>
          <ul className={styles.bullets}>
            <li>Mantenimiento programado</li>
            <li>Reparaciones urgentes</li>
            <li>Instalación de equipos nuevos</li>
            <li>Diagnóstico técnico</li>
          </ul>
        </div>

        <div className={styles.formCard}>
          <div className={styles.formHeader}>
            <h3 className={styles.formTitle}>Escribinos</h3>
            <p className={styles.formSubtitle}>
              Te respondemos al mail dentro del día hábil.
            </p>
          </div>

          {formStatus === 'success' && (
            <div className={styles.statusOk} role="status">
              Mensaje enviado correctamente. Te respondemos pronto.
            </div>
          )}
          {formStatus === 'error' && errorMessage && (
            <div className={styles.statusErr} role="alert">
              {errorMessage}
            </div>
          )}

          <form onSubmit={handleSubmit} noValidate>
            {/* honeypot anti-bot */}
            <div className={styles.honeypot} aria-hidden="true">
              <label htmlFor="company">No completar</label>
              <input
                ref={honeypotRef}
                id="company"
                name="company"
                type="text"
                tabIndex={-1}
                autoComplete="off"
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="name">Nombre</label>
              <input
                id="name"
                type="text"
                name="name"
                maxLength={80}
                autoComplete="name"
                required
                value={formData.name}
                onChange={handleChange}
                disabled={isLoading}
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? 'err-name' : undefined}
              />
              {errors.name && <small id="err-name">{errors.name}</small>}
            </div>

            <div className={styles.field}>
              <label htmlFor="email">Correo</label>
              <input
                id="email"
                type="email"
                name="email"
                maxLength={120}
                autoComplete="email"
                required
                value={formData.email}
                onChange={handleChange}
                disabled={isLoading}
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? 'err-email' : undefined}
              />
              {errors.email && <small id="err-email">{errors.email}</small>}
            </div>

            <div className={styles.field}>
              <label htmlFor="description">Descripción</label>
              <textarea
                id="description"
                name="description"
                maxLength={2000}
                required
                value={formData.description}
                onChange={handleChange}
                disabled={isLoading}
                aria-invalid={!!errors.description}
                aria-describedby={errors.description ? 'err-desc' : undefined}
              />
              {errors.description && <small id="err-desc">{errors.description}</small>}
            </div>

            <button
              type="submit"
              className={styles.button}
              disabled={isLoading}
              aria-busy={isLoading}
            >
              {isLoading ? 'Enviando…' : 'Enviar mensaje'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
