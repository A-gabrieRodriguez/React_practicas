import useFormulario from './hooks/useFormulario';
import Input from './components/Input';
import Card from './components/Card';
import Container from './components/Container';
import Button from './components/Button';
const App = () => {

  const [formulario, handleChange] = useFormulario({ name: '', lastname: '', email: '' });

  console.log(formulario);
  return (
    <form>
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