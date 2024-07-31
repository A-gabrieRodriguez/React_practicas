//CONTROLLED COMPONENTS
import { useState } from "react";
const App = () => {
  //variable para guardar el valor del input
  const [value, setValue] = useState('')

  const handleChange = (e) => {
    setValue(e.target.value)
  }
  console.log(value)
return (
    <div>
      {/*Haciendo validacion*/}
      {value.length < 5 ? <p>El nombre debe tener al menos 5 caracteres</p> : null}
      <input type="text" placeholder="Name" name="campo1" value={value} onChange={handleChange} />
    </div>
  );
};

export default App;