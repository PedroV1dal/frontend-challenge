import "./App.css";
import Logo from "./assets/Logo.svg";

function App() {
  return (
    <>
      <div className="header">
        <div className="logo">
          <img src={Logo} alt="logo" />
        </div>
      </div>
      <div className="wrapper">
        <h1>Conteúdo da página</h1>
      </div>
    </>
  );
}

export default App;
