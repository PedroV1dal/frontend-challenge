import search from "../../../assets/search.svg";
import "./index.css";

interface SearchInputProps {
  readonly placeholder?: string;
  readonly className?: string;
}

export function SearchInput({ placeholder, className }: SearchInputProps) {
  return (
    <div className={`search-container ${className ?? ""}`}>
      <input type="text" placeholder={placeholder} className="search-input" />
      <img src={search} alt="search" className="search-icon" />
    </div>
  );
}
