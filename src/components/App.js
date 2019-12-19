import React from 'react';
import { Route } from 'react-router-dom';
import Main from './Main';

const App = () => {
  // if (
  //   !config.loaded ||
  //   (config.portalUrl && !user) ||
  //   (signInRequested && !user)
  // ) {
  //   return <LoadScreen isLoaded={false} />;
  // }

  return (
    // <Route path="/main" component={Main} />
    <>
      <h1>App</h1>
      <Main />
    </>
  )
}

export default App;