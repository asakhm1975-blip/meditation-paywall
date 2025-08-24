import './App.css';
import logo from './logo.jpg'; // 👈 суретті src ішінен қосамыз

function App() {
  return (
    <div className="App">
      {/* Логотип */}
      <img 
        src={logo} 
        alt="Meditation Logo" 
        style={{ width: "200px", marginTop: "20px", borderRadius: "12px" }} 
      />

      {/* Тақырып */}
      <h1>Welcome to Meditation Paywall</h1>
    </div>
  );
}

export default App;
