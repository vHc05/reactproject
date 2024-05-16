import { db } from './firebase-config.js'
import { collection, addDoc, Timestamp } from 'firebase/firestore'

document.querySelector('.contact-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  
  const name = document.getElementById('name').value;
  const surname = document.getElementById('surname').value;
  const phoneNumber = document.getElementById('phoneNumber').value;
  
  try {
    await db.collection('users').add({
      name: name,
      surname: surname,
      phoneNumber: phoneNumber
    });
    alert('Contacto agregado correctamente');
  } catch (error) {
    console.error('Error agregando contacto: ', error);
  }
});

async function fetchContacts() {
  const contacts = [];
  try {
    const snapshot = await db.collection('users').get();
    snapshot.forEach(doc => {
      contacts.push({ id: doc.id, ...doc.data() });
    });
    console.log(contacts);
  } catch (error) {
    console.error('Error obteniendo contactos: ', error);
  }
}

fetchContacts();

async function updateContact(id, updatedData) {
  try {
    await db.collection('users').doc(id).update(updatedData);
    alert('Contacto actualizado');
  } catch (error) {
    console.error('Error actualizando contacto: ', error);
  }
}

async function deleteContact(id) {
  try {
    await db.collection('users').doc(id).delete();
    alert('Contacto eliminado');
  } catch (error) {
    console.error('Error eliminando contacto: ', error);
  }
}