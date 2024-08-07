"use client";

import React, { useEffect, useState } from 'react';
import Footer from "@/components/Footer/Footer";
import { Provider } from "react-redux";
import { store } from "../store";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "@/styles/globalStyle";
import { theme } from "@/styles/theme";
import styled from "styled-components";
import SpinnerComponent from '@/components/Spinner/Spinner';
import Toastr from '@/components/Toastr/Toastr';

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const MainContent = styled.main`
  flex: 1;
`;

// Custom hook to detect when styles are applied
const useStylesLoaded = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const checkStyles = () => {
      // Check if the required styles are applied
      const bodyStyles = getComputedStyle(document.body);
      if (bodyStyles && bodyStyles.fontFamily) {
        setIsLoaded(true);
      } else {
        requestAnimationFrame(checkStyles);
      }
    };

    checkStyles();
  }, []);

  return isLoaded;
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isLoaded = useStylesLoaded();

  return (
    <html lang="en">
      <ThemeProvider theme={theme}>
        <GlobalStyle theme={theme} />
        <body>
          <Provider store={store}>
            {isLoaded ? (
              <LayoutContainer>
                <Toastr />
                <MainContent>{children}</MainContent>
                <Footer />
              </LayoutContainer>
            ) : (
              <SpinnerComponent />
            )}
          </Provider>
        </body>
      </ThemeProvider>
    </html>
  );
}
