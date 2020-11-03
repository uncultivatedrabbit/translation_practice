import { createStore } from 'redux';
import English from '../languages/en-US.json';
import Spanish from '../languages/es-MX.json';
import French from '../languages/fr_CA.json';

const initialState = {
  locale: 'en-US',
  date: Date.now(),
  messages: {
    English,
    Spanish,
    French,
  },
};

export const changeLocale = locale => {
  return {
    type: 'CHANGE_LOCALE',
    payload: locale,
  };
};

function localeReducer(state = initialState, action) {
  switch (action.type) {
    case 'CHANGE_LOCALE':
      return { ...state, locale: action.payload };
    default:
      return state;
  }
}

const store = createStore(localeReducer);
store.subscribe(() => console.log(store.getState()));

export default store;
