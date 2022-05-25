import React from 'react';
import './App.css';
import MainLayout from './components/MainLayout/MainLayout';
import Movies from './views/Movies/Movies';

const App: React.FC = () => (
  <div className="App">
    <MainLayout>
      <Movies />
    </MainLayout>
  </div>
);

export default App;
