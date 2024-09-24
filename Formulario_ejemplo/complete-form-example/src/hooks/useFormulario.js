import { useState } from 'react';

//Formulario es el objeto que se va a modificar, es decir dinamico
const useFormulario = (elements) => {
  //elements es un objeto que se pasa como parametro al hook useFormulario
  //elements es un objeto que tiene los campos del formulario
  //elements = {name:'', lastname:'', email:''}
  const [formulario, setFormulario] = useState(elements);
  const handleChange = (e) => {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value
    });
  };
  const resetForm = () => {
    //seteamos el formulario con los valores iniciales
    setFormulario(elements);
  }

  //retornamos el formulario, el metodo handleChange y el metodo resetForm
  return [formulario, handleChange, resetForm];
}
export default useFormulario;