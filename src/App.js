import React from 'react';
import Detail from './lib/Detail'

function App() {
  return (
    <div className="App">
      <Detail history={window.location.pathname} />
    </div>
  );
}

export default App;
