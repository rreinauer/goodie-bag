import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import SingleCandy from './components/Candy';
import store from './store';
import Root from './components/root';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Route path="/" component={Root} />
      </div>
    </Router>
  </Provider>,
  document.getElementById('main')
);
