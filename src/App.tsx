import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { Route, Routes, Navigate } from 'react-router-dom';
import MainLayout from './components/MainLayout/MainLayout';
import Movies from './views/Movies/Movies';
import './App.css';
import Movie from './views/Movies/Movie/Movie';
import Error404 from './components/Error404/Error404';
import Planates from './views/Planetes/Planetes';
import Planate from './views/Planetes/Planete/Planete';

const App: React.FC = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Navigate to="/movies" replace />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<Movie />} />
          <Route path="/Planetes" element={<Planates />} />
          <Route path="/planetes/:planetId" element={<Planate />} />

          <Route path="*" element={<Error404 />} />
        </Routes>
      </MainLayout>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default App;
