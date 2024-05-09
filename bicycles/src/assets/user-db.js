import { push, ref, remove, update } from "firebase/database";
import firebaseService from "./firebase.config.js";
import { getDownloadURL, uploadBytes, ref as storageRef } from "firebase/storage";

const uploadImage = (image) => {
  console.log(image);
  const myStorageRef = storageRef(firebaseService.storage, `products/algo`);
  return uploadBytes(myStorageRef, image);
}

const getImageURL = (snapshotUrl) => {
  return getDownloadURL(snapshotUrl);
}

const addUser = (userName, userSurname, userPhone) => {
  const dbRef = ref(firebaseService.db, `products`); //Este lo hizo tiburcio por su parte, tener en cuenta la db.
  return push(dbRef, {
    nombre: userName,
    apellidos: userSurname,
    telefono: userPhone
  });
}

const updateUser = (idProduct,userName,userSurname,userPhone) => { //Se añade como input los valores a actualizar
  const userRef = ref(db, '/products/${idProduct}') 
  return update(userRef, { //Dentro de esta llave se añaden los campos que se van a actualizar
    nombre: userName,
    apellidos: userSurname,
    telefono: userPhone
  });
}

const deleteUser = (idProduct) => {
  //Para borrar, se le pasa un la referencia, la db(que se escribe asi tal cual) y la ruta entre comillas simples ->
  const userRef = ref(db, '/products/${idProduct}') 
  return remove(userRef); 
}

export default {
  uploadImage,
  addUser,
  getImageURL,
  updateUser,
  deleteUser
}