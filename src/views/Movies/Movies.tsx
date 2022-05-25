import React from 'react';
import { Button, Placeholder, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import MovieCard from '../../components/MovieCard/MovieCard';
import MovieCardSkeleton from '../../components/MovieCard/MovieCardSkeleton';
import useGetMoviesList from '../../hooks/useGetMoviesList';
import './styles.css';

const Movies: React.FC = () => {
  const [grid, setGrid] = React.useState<'grid' | 'table'>('grid');
  const { movies, isLoading } = useGetMoviesList();

  return (
    <div className="movies-layout">
      <div className="banner">
        <img src="/653613-mini.webp" alt="" />
        <div className="content">
          <h1>Star Wars World</h1>
          <a
            href="https://egybest.cafe/movie/solo-a-star-wars-story-2018/?ref=search-p1"
            target="_blank"
            rel="noreferrer"
          >
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
              {isLoading ? (
                <>
                  <MovieCardSkeleton />
                  <MovieCardSkeleton />
                  <MovieCardSkeleton />
                </>
              ) : (
                <>
                  {movies.results.map(
                    (
                      movie: { title: string; release_date: string },
                      index: number
                    ) => (
                      <MovieCard
                        title={movie.title}
                        id={index + 1}
                        key={movie.title}
                        releaseDate={new Date(movie.release_date)}
                      />
                    )
                  )}
                </>
              )}
            </div>
          ) : (
            <div className="movie-list-table">
              <Table striped bordered hover size="sm" variant="dark">
                <tbody>
                  {isLoading ? (
                    <>
                      <tr>
                        <td>
                          <Placeholder as="span" animation="glow">
                            <Placeholder md={12} />
                          </Placeholder>
                        </td>
                        <td>
                          <Placeholder as="span" animation="glow">
                            <Placeholder xs={2} />
                          </Placeholder>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <Placeholder as="span" animation="glow">
                            <Placeholder xs={12} />
                          </Placeholder>
                        </td>
                        <td>
                          <Placeholder as="span" animation="glow">
                            <Placeholder xs={2} />
                          </Placeholder>
                        </td>
                      </tr>
                    </>
                  ) : (
                    <>
                      {movies.results.map(
                        (
                          movie: { title: string; release_date: string },
                          index: number
                        ) => (
                          <tr key={movie.title}>
                            <td>
                              <Link to={`/movies/${index + 1}`}>
                                {movie.title}
                              </Link>
                            </td>
                            <td>
                              {new Date(movie.release_date).getFullYear()}
                            </td>
                          </tr>
                        )
                      )}
                    </>
                  )}
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
