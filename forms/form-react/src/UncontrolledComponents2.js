//En este caso usaremos useRef para acceder a los elementos del DOM
//la documentacion de react dice que no es correcto hacerlo de esta manera 
import { useRef } from 'react';
const App = () => {
  
  //Con use Ref accedemos a los elementos del DOM asi como el div o el input
  const input = useRef();
  const file = useRef();

  const submit = () => {
    console.log(input.current.value);

    //Accedemos al archivo, podemos ver sus propiedades
    //asi como el nombre, tamaño, tipo, fecha creacion, etc
    console.log(file.current.files[0]);

    //esos datos pueden ser guardado en un objeto FormData
    const formData = new FormData();
    formData.append('archivo1', file.current.files[0]);
    formData.append('campo1', input.current.value);

    //Con fetch podemos enviar los datos al servidor
    //aremos una simulacion de envio
    fetch('/ejemploRuta', {
      method: 'POST',
      body: formData
    })
  }

  return (
    <div>
      <div>
      <spam>Hola mundo</spam>
      <input type="text" name="campo1" ref={input}/>
      <input type="file" name="campo2" ref={file}/>
      </div>
      <input type="submit" name="campo2" onClick={submit}/>
    </div>
  )
}

export default App;