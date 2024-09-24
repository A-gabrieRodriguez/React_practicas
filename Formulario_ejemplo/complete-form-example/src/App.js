import { useState } from 'react';
import useFormulario from './hooks/useFormulario';
import Input from './components/Input';
import Card from './components/Card';
import Container from './components/Container';
import Button from './components/Button';

const App = () => {

  //Creamos un estado para almacenar los datos del formulario
  //formulario, handleChange, resetForm son los metodos, que se crean en el hook useFormulario
  //name, lastname, email son los campos del formulario que llegan como parametro al hook useFormulario
  const [formulario, handleChange, resetForm] = useFormulario({ name: '', lastname: '', email: '', });

  //Creamos un estado para almacenar los usuarios
  //es decir los datos que se ingresen en el formulario se almacenaran en un array
  const [usuarios, setUsuarios] = useState([]);

  console.log(formulario, usuarios);
  const sumit = (e) => {
    //Este metodo se usa para evitar que la pagina se recargue
    e.preventDefault();
    setUsuarios([
      ...usuarios, formulario
    ])
    resetForm();
  }
  return (
    <form onSubmit={sumit}>
      <Container>
        <Card>
          <div style={{ padding: 20 }}>
            <Input
              label="nombre"
              name="name"
              value={formulario.name}
              onChange={handleChange} />
            <Input
              label="apellido"
              name="lastname"
              value={formulario.lastname}
              onChange={handleChange} />
            <Input
              label="email"
              name="email"
              value={formulario.email}
              onChange={handleChange} />
            <Button>
              Enviar
            </Button>
          </div>
        </Card >
      </Container>
    </form>
  );
}
export default App;