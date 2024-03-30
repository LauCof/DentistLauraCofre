import React from "react";
import Card from "../Components/Card";
import { useDentistStates } from "../Context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
const {state} = useDentistStates()

  return (
    <>
      <h1>Dentistas Favoritos</h1>
      <div className="card-grid">
        {state.favs.map((dentista)=> <Card key={dentista.id} item={dentista}/>)}
      </div>
    </>
  );
};

export default Favs;