const themes = {
    light: {
      background: 'white',
      color: 'black',
    },
    dark: {
      background: 'black',
      color: 'white',
    },
  };
  
  const initialState = {
    favs: lsFavs || [],
    list: [],
    theme: themes.light,
  };


export const reducer = (state, action) => {
    switch(action.type){
        case 'GET_DENTIST':
            return {...state, list: action.payload}
        case 'ADD_FAVS': 
            return {...state, favs: [...state.favs, action.payload]}
        case 'SHOW_NOTIFICATION':
            return {...state, notification: action.payload,}
        case 'HIDE_NOTIFICATION': 
                return {...state, notification: null};
        case 'TOGGLE_THEME':
            return {...state, theme: action.payload}
    }
}