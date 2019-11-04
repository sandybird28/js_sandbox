import React from 'react';
import ReactDOM from 'react-dom';
import { store } from './store';
import { Provider, connect } from 'react-redux';


class App extends React.Component {
  componentDidMount() {
    const whenOnline = () => this.props.setOnline(true);
    const whenOffline = () => this.props.setOnline(false);
    window.addEventListener('online', whenOnline);
    window.addEventListener('offline', whenOffline);

    this.removeListeners = () => {
      window.removeEventListener('online', whenOnline);
      window.removeEventListener('offline', whenOffline);
    }
  }

  componentWillUnmount() {
    this.removeListeners();
  }

  render() {
    console.log(this.props);

    return (
      <div onClick={this.props.onGlobalClick}>
        My App!
        <br/>
        I am online {this.props.isOnline}
        <br/>
        Click Count: {this.props.clicksCount}
        <br/>
        Is clicks more than 15? {this.props.isMoreThan15}
        <br/>
        <input 
          type="checkbox" 
          id="checkbox"
          onChange={this.props.toggleCheckbox}
          checked={this.props.checked} 
        /><label htmlFor="checkbox">I'm checkbox! And I'm {this.props.checked?'checked':'unchecked'}</label>
      </div>
    );
  }
}

const ConnectedApp = connect(
  // 1 Map State To Props
  (state) => ({
    isOnline: state.app.isOnline.toString(),
    clicksCount: state.app.clicksCount,
    isMoreThan15: (state.app.clicksCount > 15).toString(),
    checked: state.enabled.checked,
  }),
  // 2 Map Dispatch To Props
  (dispatch) => ({
    onGlobalClick: () => dispatch({ type: 'ADD_CLICK' }),
    setOnline: (value) => dispatch({ type: 'SET_ONLINE', value }),
    toggleCheckbox: () => dispatch({ type: 'TOGGLE' })
  }),
  // 3
  // (fromState, fromDispatch, ownProps) => ({
  //   ...fromState,
  //   ...fromDispatch,
  //   ...ownProps,
  //   onGlobalClick: () => fromState.isOnline === 'true'
  //     ? fromDispatch.onGlobalClick()
  //     : null,
  // }),
)(App);


ReactDOM.render(
  <Provider store={store}>
    <ConnectedApp isMoreThan15="true" />
  </Provider>,
  document.getElementById('root'),
);
