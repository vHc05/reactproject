import { collection, addDoc, getDocs, updateDoc, deleteDoc, doc } from 'firebase/firestore';
import { db } from './firebase-config';

const userCollection = collection(db, 'usuarios');

export const addUser = async (user) => {
  try {
    const docRef = await addDoc(userCollection, user);
    return docRef.id;
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export const getUsers = async () => {
  const querySnapshot = await getDocs(userCollection);
  const users = [];
  querySnapshot.forEach((doc) => {
    users.push({ id: doc.id, ...doc.data() });
  });
  return users;
};

export const updateUser = async (id, user) => {
  const userDoc = doc(db, 'usuarios', id);
  try {
    await updateDoc(userDoc, user);
  } catch (e) {
    console.error("Error updating document: ", e);
  }
};

export const deleteUser = async (id) => {
  const userDoc = doc(db, 'usuarios', id);
  try {
    await deleteDoc(userDoc);
  } catch (e) {
    console.error("Error deleting document: ", e);
  }
};
