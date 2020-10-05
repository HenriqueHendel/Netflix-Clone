import React from 'react';

import Home from './pages/Home';

import GlobalStyle from './global/styles';

const App: React.FC = ()=>{
  return (
    <>
      <GlobalStyle />
      <Home />
    </>
  );
}

export default App;