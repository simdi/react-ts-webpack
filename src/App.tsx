import React from 'react';
import ReactDOM from 'react-dom';

export default function App(): JSX.Element {
  return (
    <div>
      <h1>Hello !</h1>
    </div>
  )
}

const root = document.getElementById('app-root');

ReactDOM.render(<App />, root);
