import { useState } from 'react';

const Form = () => {
  
  const [name, setName] = useState('');

  const handleSubmit = (evento) => {
    evento.preventDefault()
    alert(`Form de: ${name} enviado`)
  }

  return(
    <form onSubmit={handleSubmit}>
      <input 
        type="text"
        value={name}
        onChange={evento => setName(evento.target.value)} 
        />
      <button>Enviar</button>
    </form>
  );
}

export default Form;