import './App.css';
import logo from './assets/logo.jpg';

function App() {
  return (
    <div className="App">
      {/* Логотип */}
      <img src={logo} alt="Logo" style={{ width: '200px', marginTop: '20px' }} />

      {/* Youtube арнасының атауы */}
      <h2 style={{ margin: '10px 0', color: '#0077b6' }}>ABUNDANCE</h2>

      {/* Басты жазу */}
      <h1>Медитация сайтына қош келдіңіз!</h1>
    </div>
  );
}

export default App;
