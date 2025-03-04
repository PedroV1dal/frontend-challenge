import search from "../../../assets/search.svg";
import "./index.css";

interface SearchInputProps {
  readonly placeholder?: string;
  readonly className?: string;
  readonly onSearch?: (value: string) => void;
}

export function SearchInput({
  placeholder,
  className,
  onSearch,
}: SearchInputProps) {
  return (
    <div className={`search-container ${className ?? ""}`}>
      <input
        type="text"
        placeholder={placeholder}
        className="search-input"
        onChange={(e) => onSearch?.(e.target.value)}
      />
      <img src={search} alt="search" className="search-icon" />
    </div>
  );
}
