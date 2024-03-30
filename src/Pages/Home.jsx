import React, { useEffect } from 'react'
import Card from '../Components/Card'
import { useDentistStates } from '../Context'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
const {state} = useDentistStates()

 return (
   <main className="home">
      <h1>Home</h1>
      <div className='card-grid'>
        {state.list.map((dentista) => <Card key={dentista.id} item={dentista}/>)}
      </div>
      
    </main>
  )
}

export default Home