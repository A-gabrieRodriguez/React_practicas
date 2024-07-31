//UNCONTROLLED COMPONENTS
//En los componentes no controlados, React no controla el valor de los campos de formulario.
// En su lugar, el DOM es quien controla el valor de los campos de formulario.
//la documentacion de react dice que no es correcto hacerlo de esta manera con Uncontrolled Components
const App = () => {
    const submit = (e) => {
      e.preventDefault();
      //en este parte agarra todo el componente del formulario
      console.log(e.target);
      //tambien podemos agarrar los valores de los campos
      console.log(e.target.campo1.value);
      //tambien podemos agarrar las demas propiedades de los campos
      console.log(Array.from(new FormData(e.target)));
  
      //tambien podemos convertir los datos en un objeto para guardarlos en una base de datos o API
      const data = Array.from(new FormData(e.target));
      console.log(Object.fromEntries(data));
    }
    return (
      <form onSubmit={submit}>
        <div>
          <span>Hola mundo</span>
          <input name="campo1"/>
        </div>
        <input name="campo2"/>
        <input type="submit" value="Enviar"/>
      </form>
    );
  }
  
  export default App;
  