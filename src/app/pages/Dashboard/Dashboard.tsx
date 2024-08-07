"use client";
import { FC, useState } from 'react';
import ProductList from '@/components/ProductList/ProductList';
import Cart from '@/components/Cart/Cart';
import Header from '@/components/Header/Header';
import FilterSidebar from '@/components/FilterSidebar/FilterSidebar';
import SearchBar from '@/components/SearchBar/SearchBar';
import SpinnerComponent from '@/components/Spinner/Spinner';
import {
  Container,
  Content,
  CartWrapper,
  FilterButton,
  SearchContainer,
  SpinnerWrapper
} from './Dashboard.styles';
import { useProducts } from '@/hooks/useProducts';

const Dashboard: FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const { products, status, setFilter } = useProducts(searchQuery);
  const [isCartVisible, setIsCartVisible] = useState(false);
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const handleCartToggle = () => setIsCartVisible(!isCartVisible);
  const handleSidebarToggle = () => setIsSidebarVisible(!isSidebarVisible);

  const handleFilterChange = (category: string, minPrice: number | undefined, maxPrice: number) => {
    setFilter({ category, minPrice: minPrice ?? 0, maxPrice });
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <Container>
      <Header onCartClick={handleCartToggle} />
      <CartWrapper visible={isCartVisible}>
        <Cart onClose={() => setIsCartVisible(false)} />
      </CartWrapper>
      <FilterSidebar
        isVisible={isSidebarVisible}
        onClose={handleSidebarToggle}
        onFilterChange={handleFilterChange}
      />
      <Content>
        <SearchContainer>
          <FilterButton onClick={handleSidebarToggle}>
            Filters
          </FilterButton>
          <SearchBar
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search products..."
          />
        </SearchContainer>
        <div style={{ flex: 1 }}>
          {status === 'loading' && (
            <SpinnerWrapper>
              <SpinnerComponent />
            </SpinnerWrapper>
          )}
          {status === 'failed' && <p>Failed to load products.</p>}
          {status === 'succeeded' && <ProductList products={products} />}
        </div>
      </Content>
    </Container>
  );
};

export default Dashboard;
