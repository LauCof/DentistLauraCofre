import React from "react";
import {Link} from "react-router-dom"
import { useDentistStates } from "../Context";

const Card = ({item}) => {
const {dispatch} = useDentistStates()
const {name, username, id} = item
  
const addFav= ()=> {
dispatch({ type: "ADD_FAVS", payload: item });
}

  return (
    <div className="card">
        <img src="/public/images/doctor.jpg" alt="dentista" width= {200}/>
        <h3>{name}</h3>
        <h4>{username}</h4>
        <Link to={'/detail/'+ item.id}>Ver detalle</Link>
        <button onClick={addFav} className="favButton"> ⭐ </button>
    </div>
  );
};

export default Card
