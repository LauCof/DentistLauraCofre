import React from 'react'
import axios from 'axios'
import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'

const Detail = () => {
  const [dentist, setDentist] = useState({})
 const params = useParams()
 console.log(params)
 
 useEffect (()=> {
  axios('https://jsonplaceholder.typicode.com/users/'+params.id)
  .then(res => setDentist(res.data))
  .catch(err => console.log(err))
 }, [])

 return (
    <>
      <h1>Detail Dentist </h1>
      <div>
        <h3>Nombre: {dentist.name}</h3>
        <h3>Email: {dentist.email}</h3>
        <h3>Teléfono:{dentist.phone}</h3>
        <h3>Sitio web:{dentist.website}</h3>
      </div>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
    </>
  )
}

export default Detail