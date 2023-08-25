import MainSeries from './series/MainSeries';
import './App.css';
import { RecoilRoot } from 'recoil';
import {Routes, Route} from 'react-router-dom';
import Home from './component/Home/home';
import LanguagePage from './components/language/LanguagePage';
import Mainstream from './Mainstream/components/Mainstream';
import MovieListPage from './movie/MovieListPage/MovieListPage';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<RecoilRoot>
          <Home />
        </RecoilRoot>}/>
        <Route path="/language" element={<LanguagePage/>}/>
        <Route path="/mainstream" element={<Mainstream/>}/>
        <Route path="/series" element={<MainSeries/>}/>
        <Route path="/movie" element={<MovieListPage/>}/>
      </Routes>
    </div>
  );
}

export default App;