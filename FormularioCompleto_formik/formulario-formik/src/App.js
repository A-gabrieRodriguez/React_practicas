import logo from './logo.svg';
import './App.css';
import { useFormik } from 'formik';

const validate = values => {
  //validate es una funcion que se ejecuta cada vez que se cambia el valor de un input
  const errors = {};

  //validamos el campo name
  if (!values.name) {
    //creamos una variable de errores que es un objeto vacio
    errors.name = 'El nombre es requerido';
  } else if (values.name.length > 15) {

    errors.name = 'El nombre debe tener menos de 15 caracteres';
  }

  //validamos el campo email
  if (!values.email) {
    errors.email = 'El email es requerido';
  } else if (values.email.length > 20) {
    errors.email = 'El email debe tener menos de 20 caracteres';
  }
  //validando el campo edad
  if (!values.age) {
    errors.age = 'La edad es requerida';
  } else if (values.age > 10) {
    errors.age = 'La edad debe ser mayor a 10';
  }

  //retornamos el objeto de errores que se va a mostrar en el formulario
  //y contiene los errores de validacion
  return errors;
}

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
    },validate
    /*  al crear esta funcion dentro de useFormik, se ejecuta cada vez que se cambia el valor de un input
        por eso es necesario crear una funcion adicional para validar los campos y que se ejecute solo al 
        ser llamada, es decir cuando se envia el formulario o se hace click en un boton
    
        //creando la funcion de validate
        validate: values => {
          //validate es una funcion que se ejecuta cada vez que se cambia el valor de un input
          const errors = {};
    
          //validamos el campo name
          if (!values.name) {
            //creamos una variable de errores que es un objeto vacio
            errors.name = 'El nombre es requerido';
          }else if(values.name.length > 15){
    
            errors.name = 'El nombre debe tener menos de 15 caracteres';
          }
            //retornamos el objeto de errores que se va a mostrar en el formulario
            //y contiene los errores de validacion
            return errors;
          }
    */
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
      {/*si formik.errors.name existe, entonces se muestra el error*/}
      {formik.errors.name ? <div>{formik.errors.name}</div> : null}
      <br />
      <label>Email</label>
      <input
        name="email"
        type="text"
        onChange={formik.handleChange}
        values={formik.values.email}
      />
      {/*validando el campo de email*/}
      {formik.errors.email ? <div>{formik.errors.email}</div> : null}
      <br />
      <label>Edad</label>
      <input
        name="age"
        type="text"
        onChange={formik.handleChange}
        values={formik.values.age}
      />
      {/*validando el campo de edad*/}
      {formik.errors.age ? <div>{formik.errors.age}</div>: null}
      <br />
      <button type="submit">Enviar</button>
    </form>
  );
}

export default App;
