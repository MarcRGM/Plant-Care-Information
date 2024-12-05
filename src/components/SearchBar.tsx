import React, { useState } from 'react';
import { Search } from 'lucide-react';
import styles from '../styles/global.module.css';
import classNames from 'classnames';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query.trim());
      setQuery(''); // Clear input after submission
    }
  };

  return (
    <form onSubmit={handleSubmit} className="relative">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for plants"
        className={classNames(styles.searchInput, "w-full px-3 sm:px-6 py-2.5 sm:py-4 text-sm sm:text-lg rounded-full bg-white/20 backdrop-blur-sm text-[#425F57] placeholder-[#425F57]/70")}
      />
      <div className="absolute right-2 xs:right-3 sm:right-4 top-1/2 -translate-y-1/2">
        <button
          type="submit"
          className={styles.iconButton}
          aria-label="Search"
        >
          <Search className="h-4 w-4 xs:h-5 xs:w-5 sm:h-6 sm:w-6" />
        </button>
      </div>
    </form>
  );
};

export default SearchBar;