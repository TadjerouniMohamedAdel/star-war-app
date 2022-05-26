import React from 'react';
import { Placeholder } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useGetPlanet from '../../hooks/useGetPlanet';
import './styles.css';

type Props = {
  url: string;
};
const PlanetCard: React.FC<Props> = ({ url }) => {
  const { planet, isLoading } = useGetPlanet(url);
  return (
    <Link to={`/planetes/${url.split('https://swapi.dev/api/planets/')[1]}`}>
      <div className="planet-card">
        <div className="imgBox">
          <img src="/galaxy.jpg" alt="" />
        </div>
        <div className="info">
          {isLoading ? (
            <>
              <Placeholder as="span" animation="wave">
                <Placeholder xs={8} />
              </Placeholder>
              <Placeholder as="span" animation="wave">
                <Placeholder xs={8} />
              </Placeholder>
            </>
          ) : (
            <>
              <span>{planet.name}</span>
              <span>
                <i>{planet.terrain}</i>
              </span>
            </>
          )}
        </div>
      </div>
    </Link>
  );
};

export default PlanetCard;
