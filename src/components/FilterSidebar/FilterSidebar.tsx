import { FC, useState } from 'react';
import {
  SidebarContainer,
  CloseButton,
  FilterSection,
  FilterTitle,
  FilterOption,
  FilterInput,
  FilterLabel,
  PriceRangeLabel,
  PriceRangeInput,
  ApplyButton
} from './FilterSidebar.styles';
import useCategories from '@/hooks/useCategories';

interface FilterSidebarProps {
  isVisible: boolean;
  onClose: () => void;
  onFilterChange: (category: string, minPrice: number | undefined, maxPrice: number) => void;
}

const FilterSidebar: FC<FilterSidebarProps> = ({ isVisible, onClose, onFilterChange }) => {
  const { categories, loading, error } = useCategories();
  const [selectedCategory, setSelectedCategory] = useState<string>(''); // Default to '' for "All"
  const [minPrice, setMinPrice] = useState<number | undefined>(0);
  const [maxPrice, setMaxPrice] = useState<number>(1000);

  const handleFilter = () => {
    onFilterChange(selectedCategory, minPrice === undefined || minPrice < 0 ? 0 : minPrice, maxPrice);
    onClose();
  };

  const handleMinPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setMinPrice(value === '' ? undefined : Number(value));
  };

  return (
    <SidebarContainer isVisible={isVisible}>
      <CloseButton onClick={onClose}>Close</CloseButton>
      <FilterSection>
        <FilterTitle>Category</FilterTitle>
        {loading && <p>Loading categories...</p>}
        {error && <p>Error: {error}</p>}
        <FilterOption>
          <FilterInput
            type="radio"
            id="all"
            name="category"
            value=""
            checked={selectedCategory === ''}
            onChange={() => setSelectedCategory('')}
          />
          <FilterLabel htmlFor="all">All</FilterLabel>
        </FilterOption>
        {categories.map((category) => (
          <FilterOption key={category}>
            <FilterInput
              type="radio"
              id={category}
              name="category"
              value={category}
              checked={selectedCategory === category}
              onChange={() => setSelectedCategory(category)}
            />
            <FilterLabel htmlFor={category}>{category}</FilterLabel>
          </FilterOption>
        ))}
      </FilterSection>
      <FilterSection>
        <FilterTitle>Price Range</FilterTitle>
        <PriceRangeLabel>
          Min Price:
          <PriceRangeInput
            type="number"
            value={minPrice !== undefined ? minPrice : ''}
            onChange={handleMinPriceChange}
          />
        </PriceRangeLabel>
        <PriceRangeLabel>
          Max Price:
          <PriceRangeInput
            type="number"
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
          />
        </PriceRangeLabel>
      </FilterSection>
      <ApplyButton onClick={handleFilter}>Apply Filters</ApplyButton>
    </SidebarContainer>
  );
};

export default FilterSidebar;
