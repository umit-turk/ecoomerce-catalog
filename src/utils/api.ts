export const fetchProducts = async () => {
    const response = await fetch('https://fakestoreapi.com/products?sort=desc');
    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }
    return response.json();
  };
  
  export const fetchFilteredProducts = async (filter: { category: string; minPrice: number; maxPrice: number }) => {
    const { category, minPrice, maxPrice } = filter;
    let url = 'https://fakestoreapi.com/products?sort=desc';
  
    if (category) {
      url = `https://fakestoreapi.com/products/category/${category}`;
    }
  
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }
    
    const data = await response.json();
    return data.filter((product: any) => product.price >= minPrice && product.price <= maxPrice);
  };
  