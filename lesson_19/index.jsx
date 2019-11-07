import React from 'react';
import ReactDOM from 'react-dom';
import { store } from './store';
import { Provider, connect } from 'react-redux';


class App extends React.Component {
  render() {
    this.props.save()
    return (
      <div>
        <input 
          type="text"
          onInput={(e)=>this.inputValue = e.target.value}
        />
        <button
          onClick={()=>this.props.onClick(this.inputValue)}
        >
          add
        </button>
        <ul>
          {this.props.list.map((el,i) =>
            <li key={i}>{el}</li>
          )}
        </ul>
      </div>
    );
  }
}

const ConnectedApp = connect(
  // 1 Map State To Props
  (state) => ({
    list: state.list
  }),
  // 2 Map Dispatch To Props
  (dispatch) => ({
    onClick: (value)=> {dispatch({type:'ADD', value})},
    save: () => dispatch({type:'SAVE'})
  }),
)(App);


ReactDOM.render(
  <Provider store={store}>
    <ConnectedApp />
  </Provider>,
  document.getElementById('root'),
);
