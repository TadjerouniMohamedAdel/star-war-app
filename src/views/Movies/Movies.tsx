import React from 'react';
import { Button, Table } from 'react-bootstrap';
import MovieCard from '../../components/MovieCard/MovieCard';
import './styles.css';

const Movies: React.FC = () => {
  const [grid, setGrid] = React.useState<'grid' | 'table'>('grid');

  return (
    <div className="movies-layout">
      <div className="banner">
        <img src="/653613-mini.webp" alt="" />
        <div className="content">
          <h1>Star Wars World</h1>
          <a href="fdfgd">
            <i className="bx bx-play" />
            <span>Get Last Movie</span>
          </a>
        </div>
      </div>
      <div className="old-movies">
        <h2>
          Old Movies
          <div className="grid-control">
            <Button
              className={`button-grid ${grid === 'grid' && 'active'}`}
              onClick={() => setGrid('grid')}
            >
              <i className="bx bx-grid-alt" />
            </Button>
            <Button
              className={`button-grid ${grid === 'table' && 'active'}`}
              onClick={() => setGrid('table')}
            >
              <i className="bx bx-table" />
            </Button>
          </div>
        </h2>
        <div>
          {grid === 'grid' ? (
            <div className="movie-list">
              <MovieCard />
              <MovieCard />
              <MovieCard />
              <MovieCard />
              <MovieCard />
              <MovieCard />
            </div>
          ) : (
            <div className="movie-list-table">
              <Table striped bordered hover size="sm" variant="dark">
                <tbody>
                  <tr>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <td>Larry the Bird</td>
                    <td>@twitter</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default Movies;
