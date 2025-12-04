import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import { AuthProvider } from "./context/AuthContext.jsx"
import { CarritoProvider } from "./context/CarritoContext"
import { ProductsProvider } from "./context/ProductsContext.jsx"
import { SearchProvider } from "./context/SearchContext"
import './index.css'

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <ProductsProvider>
          <SearchProvider>
            <CarritoProvider>
              <App />
            </CarritoProvider>
          </SearchProvider>
        </ProductsProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);