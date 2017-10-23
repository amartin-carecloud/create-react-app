import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root/RootComponent';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Store from './store';

const App = () => (
  <Provider store={Store}>
    <BrowserRouter>
      <Root />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(<App />, document.getElementById('root'));
