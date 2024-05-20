import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import "./ContactUs.css";
import React from 'react';
import ReactDOM from 'react-dom';
import UserForm from './UserForm';

const App = () => (
  <div>
    <Header />
    <h1>Formulario para apuntarse a la excursion</h1>
    <UserForm />
    <Footer />
  </div>
);

export default App;
ReactDOM.render(<App />, document.getElementById('root'));