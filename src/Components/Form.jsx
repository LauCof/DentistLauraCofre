import React from "react";
import { useState } from "react";

const Form = ({handleClick}) => {
  //Aqui deberan implementar el form completo con sus validaciones
  const [cliente, setCliente] = useState({
    nombre: '',
    email: '',
})

const [show, setShow] = useState(false)
const [err, setErr] = useState(false)

const handleSubmit = (event) => {
  event.preventDefault()
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if(cliente.nombre.length >= 5 && emailRegex.test(cliente.email)){
      setShow(true)
      setErr(false)
      
  } else {
      setErr(true)
      console.log ()
  }
}
  return (
    <div> {show ? null: 
      <form onSubmit={handleSubmit}>
        <label>Nombre Completo: </label>
       <input type="text" onChange={(event) => setCliente({...cliente, nombre: event.target.value})}/>
       <label>Email:</label>
       <input type="text" onChange={(event) => setCliente({...cliente, email: event.target.value})}/>
       <button onClick={handleClick}>Enviar</button>
      </form>
      } 

    {show ? 
         <>
             <h4>Gracias, {cliente.nombre} te contactaremos cuando antes vía mail a {cliente.email}!</h4>
        </>
     : <p>Por favor verifique su información nuevamente.</p>}
     {err && <h4 style={{color: 'green'}}>Por favor verifique su información nuevamente.</h4>}

    </div>
  );
};

export default Form;
