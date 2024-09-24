import './Input.css';
const Input = ({label, ...rest}) => {
  return (
    <div className='field'>
      <label>{label}</label>
     {/* aqui le pasamos el resto de la propiedades */}
    <input  {...rest} />
    </div>
  );
}

export default Input;