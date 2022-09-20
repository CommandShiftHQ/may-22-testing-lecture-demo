import './App.css';
import List from './components/List';
import languages from "./data/languages.json";

function App() {
  return (
    <div className="App">
      <h1>Languages</h1>
      <List languages={languages} />
    </div>
  );
}

export default App;
