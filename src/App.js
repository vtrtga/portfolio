import './App.css';
import Provider from './context/Provider';
import './css/Header.css'
import './css/Section.css'
import Main from './page/Main';

function App() {
  return (
    <Provider>
    <Main />
    </Provider>
  );
}

export default App;
