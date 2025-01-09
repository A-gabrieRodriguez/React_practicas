import logo from './logo.svg';
import './App.css';
import { Formik, Form, ErrorMessage, Field } from 'formik';

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
  } else if (values.age < 10) {
    errors.age = 'La edad debe ser mayor a 10';
  }

  //retornamos el objeto de errores que se va a mostrar en el formulario
  //y contiene los errores de validacion
  return errors;
}

function App() {
  return (
    <Formik
      initialValues={{ name: '', email: '', age: '' }}
      validate={validate}
      onSubmit={values => console.log(values)}
    >
      <Form>
        <label>nombre</label>
        <Field name="name" type="text" />
        <ErrorMessage name="name" />
        <br />
        <label>email</label>
        <Field name="email" type="text" />
        <ErrorMessage name="email" />
        <br />
        <label>edad</label>
        <Field name="age" type="text" />
        <ErrorMessage name="age" />

        <button type="submit">Enviar</button>
      </Form>

    </Formik>
  )
}

export default App;
