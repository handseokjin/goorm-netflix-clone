import './App.css';
import { RecoilRoot } from 'recoil';
import Home from './component/Home/home';
import LanguagePage from './components/language/LanguagePage';

function App() {
  return (
    <div className="App">
      <RecoilRoot>
        <Home />
      </RecoilRoot>
      <LanguagePage/>
    </div>
  );
}

export default App;
