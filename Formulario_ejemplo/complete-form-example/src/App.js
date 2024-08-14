import useFormulario from './hooks/useFormulario';

const App = () => {

  const [formulario, handleChange] = useFormulario({name: ''});

  console.log(formulario);
  return (
   <form>
    <input 
    name="name"
    placeholder="Write your name"
    value={formulario.name}
    onChange={handleChange}
    />

   </form>
  );
}
export default App;