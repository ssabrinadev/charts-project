import { HomePage } from '@/pages';
import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import './styles/index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HomePage />
  </StrictMode>,
);
