//CONTROLLED COMPONENTS
/*
* Si tenemos muchos inputs en un formulario, 
* es mejor usar un solo estado para todos los inputs,
* en ves de tener un estado para cada input 
*/

import { useState } from "react";
const App = () => {
  //value es un objeto con dos propiedades: normal y textoarea
  // puede agarrar el valor de los inputs
  
  const [value, setValue] = useState({normal:"",textoarea:""})

  const handleChange = (e) => {
    
    //Agarramos el valor de los inputs con el name y agarramos el valor
    //Si usamos este metodo no guardara los datos de la variable normal
    //setValue({[e.target.name]:e.target.value})

    //una forma de resolverlo es con el operador spread
    //setValue({...value,[e.target.name]:e.target.value})
    
    //Otra forma de resolverlo es pasar el tipo y setear el valor
    setValue((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value
      };
    });
  }
  console.log(value)
return (
    <div>
      {/*Haciendo validacion*/}
      {value.length < 5 ? <p>El nombre debe tener al menos 5 caracteres</p> : null}
      <input type="text" name="normal" value={value.normal} onChange={handleChange} />
      <textarea name="textoarea" value={value.textoarea} onChange={handleChange} />
    </div>
  );
};

export default App;