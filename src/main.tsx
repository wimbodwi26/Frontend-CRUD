import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'

import { BrowserRouter } from 'react-router-dom';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient()

import { AuthProvider } from './Context/AuthContext.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
  <AuthProvider>
  <BrowserRouter>
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
  </BrowserRouter>
  </AuthProvider>
  </StrictMode>,
)
