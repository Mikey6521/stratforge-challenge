import React, { useEffect, useState } from 'react';
import useDebounce from '../customHooks/useDebounce';

interface FilterComponentProps {
  filterText: string;
  setFilterText: (text: string) => void;
}

const FilterComponent: React.FC<FilterComponentProps> = ({ filterText, setFilterText }) => {
  const [inputValue, setInputValue] = useState(filterText);
  const debouncedValue = useDebounce(inputValue, 300);

  useEffect(() => {
    setFilterText(debouncedValue);
  }, [debouncedValue, setFilterText]);

  return (
    <div className="mb-4">
      <input
        type="text"
        placeholder="Filter by name..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="w-full p-2 border rounded"
      />
    </div>
  );
};

export default FilterComponent;
