//UNCONTROLLED COMPONENTS
//En los componentes no controlados, React no controla el valor de los campos de formulario.
// En su lugar, el DOM es quien controla el valor de los campos de formulario.
//la documentacion de react dice que no es correcto hacerlo de esta manera con Uncontrolled Components

{/* Los Unconrtrolled component son usado por si queremos migrar nuestro formulario */}
const App = () => {
    const submit = (e) => {
      e.preventDefault();
  
      const data =  Array.from(new FormData(e.target));
      console.log(Object.fromEntries(data));
    }
    return (
      <form onSubmit={submit}>
        <div>
          <span>Hola mundo</span>
          <input name="campo1"/>
        </div>
        <input name="campo2"/>
        {/* Los Uncontrolled components tambien son usados para los componente tipo file con useRef*/}      
        <input type="file" name="campo3"/>
        <input type="submit" value="Enviar"/>
      </form>
    );
  }
  
  export default App;
  