import { createStore, applyMiddleware } from 'redux';

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      return {
        ...state,
        list: state.list.concat(action.value)
      };
    case 'LOCAL':
      console.log('local')
      console.log(action.value)
      console.log(state)
      return {
        ...state,
        list: action.value
      };
  }

  if (state) {
    return state;
  }

  return {
    list: []
  };
}

// deduplicator
const deduplicatorMiddleware = (store) => (next) => (action) => {
  if(!store.getState().list.includes(action.value)){

    next(action);
  }
};

// middleware storage
const storageMiddleware = (store) => (next) => {
  if(localStorage.getItem('list')){
      next({type:'LOCAL', value: JSON.parse(localStorage.getItem('list')) })
  }
  return (action) => {
    localStorage.setItem('list',JSON.stringify(store.getState().list))
    next(action);
}};

export const store = createStore(
  reducer,
  applyMiddleware(
    deduplicatorMiddleware,
    storageMiddleware)
  );