import React from 'react';
import Detail from './lib/Detail'

function App() {
  return (
    <div className="App">
      <Detail path={window.location.pathname} />
    </div>
  );
}

export default App;
