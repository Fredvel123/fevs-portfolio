import React from 'react';
import { Fragment } from 'react/cjs/react.production.min';
// components
import Header from './Header';
import HomePage from './HomePage';

function Home() {
  return (
    <Fragment>
      <div id='home'>
        <Header />
        <HomePage />
      </div>
    </Fragment>
  );
}

export default Home;
