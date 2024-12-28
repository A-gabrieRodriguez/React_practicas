import logo from './logo.svg';
import './App.css';
import {useFormik} from 'formik';

function App() {
  //formik es un hook que nos permite manejar el estado de un formulario
  //y sus validaciones, ademas de poder manejar los eventos de los inputs

  //useFormik recibe un objeto con las propiedades iniciales del formulario
  //y retorna un objeto con las funciones y propiedades necesarias para manejar el
  //formulario

  //const formik = useFormik({initialValues: {variable1: 'valor1', variable2: 'valor2'}, funciones y propiedades onsubmit, onchage, etc})
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      age: ''
    },
    //onSubmit es una funcion que se ejecuta cuando se envia el formulario,
    //values es un objeto con los valores de los inputs
    onSubmit: values => {
      console.log(values)
    }
  })

  return (
    <form onSubmit={formik.handleSubmit}>
      <label>Producto</label>
      <input 
        name="name"
        type="text"
        onChange={formik.handleChange}
        values={formik.values.name}
      />
      <label>Email</label>
      <input 
        name="email"
        type="text"
        onChange={formik.handleChange}
        values={formik.values.email}
      />
      <label>Edad</label>
      <input 
        name="age"
        type="text"
        onChange={formik.handleChange}
        values={formik.values.age}
      />
      <button type="submit">Enviar</button>
    </form>
  );
}

export default App;
