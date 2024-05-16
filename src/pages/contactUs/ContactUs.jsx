import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import "./ContactUs.css";
import userDb from "../../assets/user-db.js";
import React, { useState, useEffect } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

function ContactUs() {
  return (
    <>
      <Header />
      <body className="contact-body">
        <h1>La Ruta del Agua | Formulario de Contacto</h1>
        <form className="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Nombre: </label>
          <input className="contact-input" id="name" name="name" type="text" value={form.name} onChange={handleChange} />
          <label htmlFor="surname">Apellido: </label>
          <input className="contact-input" id="surname" name="surname" type="text" value={form.surname} onChange={handleChange} />
          <label htmlFor="phoneNumber">Telefono: </label>
          <input className="contact-input" id="phoneNumber" name="phoneNumber" type="text" value={form.phoneNumber} onChange={handleChange} />
          <button className="contact-form-button" type="submit">Submit</button>
        </form>
        <Footer />
      </body>

    </>
  )
}

export default ContactUs;