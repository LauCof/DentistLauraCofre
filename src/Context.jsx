import axios from 'axios'
import {createContext, useContext, useEffect, useReducer} from 'react'
import { reducer } from './reducers/reducer'

const DentistStates = createContext()

const lsFavs = JSON.parse(localStorage.getItem('favs'))
const initialState = {
    favs: lsFavs || [], 
    list: [],
    theme: "", 
} 

const Context = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        axios('https://jsonplaceholder.typicode.com/users')
        .then(res => {
            console.log(res.data)
            dispatch({type: 'GET_DENTIST', payload: res.data})
        })
    }, [])

    useEffect(() => {
        localStorage.setItem('favs', JSON.stringify(state.favs))
    }, [state.favs])

    return(
        <DentistStates.Provider value={{state, dispatch}}>
            {children}
        </DentistStates.Provider>
    )
}

export default Context

export const useDentistStates = () => useContext(DentistStates)