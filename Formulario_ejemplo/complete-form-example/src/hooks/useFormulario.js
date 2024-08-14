import { useState } from 'react';

//Formulario es el objeto que se va a modificar, es decir dinamico
const useFormulario = (elements) => {
    const [formulario, setFormulario] = useState(elements);
      const handleChange = (e) => {
        setFormulario({
          ...formulario,
          [e.target.name]: e.target.value
        });
      };
        return [formulario, handleChange];
}
export default useFormulario;