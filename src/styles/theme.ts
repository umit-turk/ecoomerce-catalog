// src/styles/themes.ts

export interface Theme {
  colors: {
    headerBackground: string;
    text: string;
    primary: string;
    secondary: string;
    background: string;
    border: string;
    black: string;
    darkGray: string;
    lightGray: string;
  };
  fonts: {
    primary: string;
    secondary: string;
  };
  spacing: {
    small: string;
    medium: string;
    large: string;
    xlarge: string;
  };
  breakpoints: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
}

export const theme: Theme = {
  colors: {
    headerBackground: '#1a1a1a', // Daha koyu siyah
    text: '#f5f5f5', // Açık gri beyaz
    primary: '#007bff', // Mavi
    secondary: '#6c757d', // Gri
    background: '#e9ecef', // Açık gri
    border: '#ced4da', // Daha açık gri
    black: '#000000', // Siyah
    darkGray: '#343a40', // Koyu gri
    lightGray: '#f8f9fa', // Çok açık gri
  },
  fonts: {
    primary: 'Arial, sans-serif',
    secondary: 'Georgia, serif',
  },
  spacing: {
    small: '0.5rem',
    medium: '1rem',
    large: '1.5rem',
    xlarge: '2rem',
  },
  breakpoints: {
    mobile: '600px',
    tablet: '900px',
    desktop: '1200px',
  },
};
declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}