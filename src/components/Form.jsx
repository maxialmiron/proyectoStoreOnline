import { useState } from 'react';

const Form = () => {
  
  const [nombre, setNombre] = useState('');

  const manejarEnvio = (evento) => {
    evento.preventDefault()
    alert(`Form de: ${nombre} enviado`)
  }

  return(
    <form onSubmit={manejarEnvio}>
      <input 
        type="text"
        value={nombre}
        onChange={evento => setNombre(evento.target.value)} 
        />
      <button>Enviar</button>
    </form>
  );
}

export default Form;