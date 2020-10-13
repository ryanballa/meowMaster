import React from 'react';
import { HashRouter } from 'react-router-dom';
import Routes from './Routes';


const App = () => {

  return (
    <main data-testid="parent-app">
        <HashRouter>
            <Routes />
        </HashRouter>
    </main>
  );
};

export default App;