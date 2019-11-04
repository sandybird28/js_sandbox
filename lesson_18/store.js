import { createStore, combineReducers } from 'redux';

function appReducer(state, action) {
  switch (action.type) {
    case 'SET_ONLINE':
      return {
        ...state,
        isOnline: action.value,
      };

    case 'ADD_CLICK':
      return {
        ...state,
        clicksCount: state.clicksCount + 1,
      };
  }

  if (state) {
    return state;
  }

  return {
    isOnline: false,
    clicksCount: 0,
    good: false,
  };
}

function userReducer(state, action) {
  switch (action.type) {
    case 'SET_USER':
      return action.user;
  }

  if (state) {
    return state;
  }

  return {
    firstName: '',
    lastName: '',
    email: '',
  };
}

function toggle(state, action) {

  switch (action.type) {
    case 'TOGGLE':
      
      return {
        ...state,
        checked: !state.checked
      };
  }

  if (state) {
    return state;
  }

  return {
    checked: false,
  };
}

const reducer = combineReducers({
  app: appReducer,
  user: userReducer,
  enabled: toggle,
});

export const store = createStore(reducer);