import axios from 'axios'
import {createContext, useContext, useEffect, useReducer} from 'react'
import { reducer } from './reducers/reducer'

const DentistStates = createContext()
const lsFavs = JSON.parse(localStorage.getItem('favs'))

const initialState = {
    favs: lsFavs || [], 
    list: [],
    theme: theme.light,
} 

const Context = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    const {theme} = state

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

    const toggleTheme = () => {
        dispatch({
          type: "TOGGLE_THEME",
          payload: state.theme === themes.light ? themes.dark : themes.light,
        });
      };

    return(
        <DentistStates.Provider value={{state: {...state, theme}, dispatch, toggleTheme}}>
            {children}
        </DentistStates.Provider>
    )
}

export default Context

export const useDentistStates = () => useContext(DentistStates)