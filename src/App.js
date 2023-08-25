import './App.css';
import { RecoilRoot } from 'recoil';
import Home from './component/Home/home';
import LanguagePage from './components/language/LanguagePage';
import Mainstream from './Mainstream/components/Mainstream';

function App() {
  return (
    <div className="App">
      <RecoilRoot>
        <Home />
      </RecoilRoot>
      <LanguagePage/>
      <Mainstream/>
    </div>
  );
}

export default App;