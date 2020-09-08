import React, { useEffect, useState } from 'react';
import List from 'components/List.tsx'
import logo from '../logo.svg';
import '../App.css';

function App() {
  const [data, setData] = useState([{ title: 123, date: new Date() }])

  const fetchMovies = async () => {
    const response = await fetch('http://localhost:3000/movies');
    return await response.json();
  }

  useEffect(() => {
    (async () => {
      const result = await fetchMovies()
      setData([...result, ...data])
    })()
  }, [])

  return (
    <div className="App">
      <List list={data} />
    </div>
  );
}


export default App;
