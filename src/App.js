import React from 'react';

import './App.css';
import { Button } from 'reactstrap';

import MovieList from './components/MovieList';


function App() {
  return (
    <div className='App'>
      <Button color='warning'>Hello Movie Details</Button>
      <MovieList />
    </div>
  );
}

export default App;
