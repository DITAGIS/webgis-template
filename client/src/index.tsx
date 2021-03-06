import './modules/mapConfig';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers/reducers'
import { MuiThemeProvider } from 'material-ui/styles';
import './css/main.scss';
let store = createStore(reducers
  // , (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);
import Index from './pages/index';

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider>
      <Index />
    </MuiThemeProvider>
  </Provider>,
  document.querySelector('#root'));
