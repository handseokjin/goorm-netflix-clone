import logo from './logo.svg';
import './App.css';
import { Outlet, Router, Route, Routes } from 'react-router-dom';

import MovieListPage from './movie/MovieListPage/MovieListPage';
import MovieDetailPage from './movie/MovieDetailPage/MovieDetailPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MovieListPage />}/>
        <Route path="detail" index element={<MovieDetailPage />} />
      </Routes>

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
