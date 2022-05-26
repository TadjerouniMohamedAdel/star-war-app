import React from 'react';
import { Placeholder } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import CharacterCard from '../../../components/CharacterCard/CharacterCard';
import Error404 from '../../../components/Error404/Error404';
import PlanetCard from '../../../components/PlanetCard/PlanetCard';
import useGetMovie from '../../../hooks/useGetMovie';
import './styles.css';

const Movie: React.FC = () => {
  const params = useParams();

  const { isLoading, movie } = useGetMovie(
    params.movieId ? parseInt(params.movieId, 10) : undefined
  );
  return (
    <div>
      {!isLoading && (movie.detail === 'Not found' || movie.length === 0) ? (
        <Error404 />
      ) : (
        <div className="movie-container">
          <img src="/653613-mini.webp" alt="" />
          <div className="movie-content">
            {isLoading ? (
              <>
                <Placeholder as="h1" animation="wave">
                  <Placeholder xs={8} />
                </Placeholder>
                <Placeholder as="h2" animation="wave">
                  <Placeholder xs={8} />
                </Placeholder>
                <Placeholder as="h2" animation="wave">
                  <Placeholder xs={8} />
                </Placeholder>
                <Placeholder as="p" animation="wave">
                  <Placeholder xs={8} />
                </Placeholder>
              </>
            ) : (
              <>
                <h1>
                  {movie.title} ({new Date(movie.release_date).getFullYear()})
                </h1>
                <h2>
                  Directed By <i> {movie.director.toUpperCase()}</i>
                </h2>
                <h2>
                  Produced By <i>{movie.producer.toUpperCase()}</i>
                </h2>
                <p>{movie.opening_crawl}</p>
                <h2>Main Character</h2>
                <div className="card-list">
                  {movie.characters.slice(0, 5).map((characterUrl: string) => (
                    <CharacterCard key={characterUrl} url={characterUrl} />
                  ))}
                </div>
                <h2>Planets</h2>
                <div className="card-list">
                  {movie.planets.map((planetUrl: string) => (
                    <PlanetCard key={planetUrl} url={planetUrl} />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Movie;
