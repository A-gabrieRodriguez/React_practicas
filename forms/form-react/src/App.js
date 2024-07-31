//CONTROLLED COMPONENTS
/*
* En este caso usaremos la etiqueta selection
*/

import { useState } from "react";

const App = () => {

  //value es un objeto con dos propiedades: normal y textoarea
  // puede agarrar el valor de los inputs
  //a selectCombobox le asignamos un valor por defecto, tambien se puede a las demas
  const [value, setValue] = useState({
    normal:"",
    textoarea:"",
    selectCombobox:"opcion1",
    check:false,
    talla:"mediana"
    });

  const handleChange = ({target}) => {
    
    //No se logra setear el valor de los checkbox, por eso se usa la propiedad checked
    console.log(target.type, target.checked);//aqui podemos ver el tipo del valor que se intenta setear
                                    //en este caso es checkbox

    //Otra forma de resolverlo es pasar el tipo y setear el valor
    setValue((prevState) => {
      return {
        ...prevState,  //aqui seteamos el valor
        [target.name]:target.type ==='checkbox' ? target.checked : target.value
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

      {/*Etiqueta select que es tambien combox */}
      <select value={value.select} name="selectCombobox" onChange={handleChange}>
        <option value="opcion1">Opcion 1</option>
        <option value="opcion2">Opcion 2</option>
        <option value="opcion3">Opcion 3</option>
      </select>
      <input type="checkbox" name="check" checked={value.check} onChange={handleChange} />

      <div>
        <label>Tipo de talla</label>
        <input 
        type="radio" 
        name="talla" 
        value="grande" 
        onChange={handleChange}
        checked={value.talla === "grande"}
        />Grande

        <input 
        type="radio"
        name="talla"
        value="mediana"
        onChange={handleChange}
        checked={value.talla === "mediana"}
         />Mediana
        
        <input type="radio"
        name="talla"
        value="pequeña"
        onChange={handleChange}
        checked={value.talla === "pequeña"}
        />Pequeña
      
      </div>
    </div>
  );
};

export default App;