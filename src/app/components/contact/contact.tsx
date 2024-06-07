// contact.tsx
'use client';

import React, { FormEvent, useState } from 'react';
import styles from './contact.module.scss';

const contact = () => {
  const [formData, setFormData] = useState({
    email: '',
    description: '',
  });

  const handlesubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log(formData);
  };

  const handleChange = (e: any) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className={styles.container} id="contact">
      <form onSubmit={handlesubmit}>
        <div>
          <label></label>
          <input type="text" name="email" onChange={handleChange} />
        </div>
        <div>
          <label></label>
          <textarea name="description" onChange={handleChange} />
        </div>
        <button type="submit">enviar</button>
      </form>
    </div>
  );
};

export default contact;
