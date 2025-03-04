import "./App.css";
import Logo from "./assets/Logo.svg";
import { SearchInput } from "./components/atoms/SearchInput";
import { Typography } from "./components/atoms/Typograph";
import { EmployeeTable } from "./components/organism/EmployeeTable";
import { useState } from "react";

function App() {
  const [searchTerm, setSearchTerm] = useState<string>("");
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
          <SearchInput placeholder="Pesquisar" onSearch={setSearchTerm} />
        </div>
        <EmployeeTable searchTerm={searchTerm} />
      </div>
    </>
  );
}

export default App;
