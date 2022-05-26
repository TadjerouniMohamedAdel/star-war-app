import React from 'react';
import { Button } from 'react-bootstrap';
import MovieCardSkeleton from '../../components/MovieCard/MovieCardSkeleton';
import PlanetCard2 from '../../components/PlanetCard/PlanetCard2';
import useGetPlanetsList from '../../hooks/useGetPlanetsList';
import './styles.css';

const Planates: React.FC = () => {
  const [page, setPage] = React.useState(1);
  const { isLoading, planets } = useGetPlanetsList(page);

  return (
    <div className="planets-container">
      <img src="/653613-mini.webp" alt="" />
      <div className="content">
        <h1>Star Wars Planets</h1>
        <div className="planets-list">
          {isLoading ? (
            <>
              <MovieCardSkeleton />
              <MovieCardSkeleton />
              <MovieCardSkeleton />
            </>
          ) : (
            <>
              {planets.results.map(
                (planet: { name: string; terrain: string; url: string }) => (
                  <PlanetCard2 key={planet.name} planet={planet} />
                )
              )}
            </>
          )}
          {!isLoading && (
            <div className="pagination">
              <Button
                disabled={page <= 1}
                onClick={() => {
                  if (page > 1) setPage(page - 1);
                }}
              >
                <i className="bx bx-chevron-left" />
              </Button>
              <Button
                disabled={!(page < planets.count / planets.results.length)}
                onClick={() => {
                  if (page < planets.count / planets.results.length)
                    setPage(page + 1);
                }}
              >
                <i className="bx bx-chevron-right" />
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default Planates;
