import React, { useState, useEffect } from 'react';
import { addUser, getUsers, updateUser, deleteUser } from '../../assets/firebaseService';

const UserForm = () => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({ apellido: '', nombre: '', telefono: '' });
  const [editing, setEditing] = useState(false);
  const [currentId, setCurrentId] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const usersList = await getUsers();
    setUsers(usersList);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editing) {
      await updateUser(currentId, user);
      setEditing(false);
      setCurrentId(null);
    } else {
      await addUser(user);
    }
    setUser({ apellido: '', nombre: '', telefono: '' });
    fetchUsers();
  };

  const handleEdit = (user) => {
    setUser(user);
    setEditing(true);
    setCurrentId(user.id);
  };

  const handleDelete = async (id) => {
    await deleteUser(id);
    fetchUsers();
  };

  return (
    <div className='contact-body'>
      <form onSubmit={handleSubmit} className='contact-form'>
        <input className='contact-input'
          type="text"
          placeholder="Apellido"
          value={user.apellido}
          onChange={(e) => setUser({ ...user, apellido: e.target.value })}
          required
        />
        <input className='contact-input'
          type="text"
          placeholder="Nombre"
          value={user.nombre}
          onChange={(e) => setUser({ ...user, nombre: e.target.value })}
          required
        />
        <input className='contact-input'
          type="text"
          placeholder="Telefono"
          value={user.telefono}
          onChange={(e) => setUser({ ...user, telefono: e.target.value })}
          required
        />
        <button type="submit" className='contact-form-button'>{editing ? 'Actualizar' : 'Agregar'}</button>
      </form>
      <ul className='contact-text'>
        {users.map((user) => (
          <li key={user.id} className='contact-text'>
            {user.nombre} {user.apellido} - {user.telefono}
            <button onClick={() => handleEdit(user)} className='contact-form-button'>Editar</button>
            <button onClick={() => handleDelete(user.id)} className='contact-form-button'>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserForm;