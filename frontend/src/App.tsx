import "./App.css";
import Logo from "./assets/Logo.svg";
import { SearchInput } from "./components/atoms/SearchInput";
import { Typography } from "./components/atoms/Typograph";

function App() {
  return (
    <>
      <div className="header">
        <div className="logo">
          <img src={Logo} alt="logo" />
        </div>
      </div>
      <div className="wrapper">
        <div className="top-content">
          <Typography variant="h1">Funcinários</Typography>
          <SearchInput placeholder="Pesquisar" />
        </div>
      </div>
    </>
  );
}

export default App;
