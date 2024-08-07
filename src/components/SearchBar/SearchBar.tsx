"use client"

import React, { FC } from 'react';
import { StyledInput, SearchBarContainer } from './SearchBar.styles';

interface SearchBarProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

const SearchBar: FC<SearchBarProps> = ({ value, onChange, placeholder }) => {
  return (
    <SearchBarContainer>
      <StyledInput
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder || 'Search...'}
      />
    </SearchBarContainer>
  );
};

export default SearchBar;
