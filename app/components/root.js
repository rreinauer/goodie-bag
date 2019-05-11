import React from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Candy from './Candy';
import SingleCandy from './SingleCandy';

const Root = () => {
  return (
    <Router>
      <div>
        <nav>
          Goodie Bag
          <Link to="/">Home</Link>
        </nav>
        <main>
          <h1>Welcome to the Goodie Bag!</h1>
          <p>What a nice home page for your goodies!</p>
          <Link to="/candies">What's in the Goodie Bag!?</Link>
          <Route path="/candies" component={Candy} />
          <Route path="/candies/:candyId" component={SingleCandy} />
        </main>
      </div>
    </Router>
  );
};

export default Root;
