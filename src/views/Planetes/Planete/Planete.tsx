import React from 'react';
import { Placeholder } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Error404 from '../../../components/Error404/Error404';
import useGetPlanet from '../../../hooks/useGetPlanet';
import './styles.css';

const Planate = () => {
  const params = useParams();
  const id = params.planetId ? parseInt(params.planetId, 10) : undefined;
  const { isLoading, planet } = useGetPlanet(
    id ? `https://swapi.dev/api/planets/${id}` : null
  );
  console.log(planet, isLoading);
  return (
    <div>
      {!isLoading && (planet.detail === 'Not found' || planet.length === 0) ? (
        <Error404 />
      ) : (
        <div className="planet-container">
          <img src="/galaxy.jpg" alt="" />
          <div className="content">
            {isLoading ? (
              <>
                <Placeholder as="h1" animation="wave">
                  <Placeholder xs={8} />
                </Placeholder>
                <Placeholder as="ul" animation="wave">
                  <Placeholder xs={12} />
                </Placeholder>
              </>
            ) : (
              <>
                <h1>{planet.name}</h1>
                <ul>
                  <li>
                    <i>Terrain:</i>
                    <span>{planet.terrain}</span>
                  </li>
                  <li>
                    <i>Climate:</i>
                    <span>{planet.climate}</span>
                  </li>
                  <li>
                    <i>Gravity:</i>
                    <span>{planet.gravity}</span>
                  </li>
                  <li>
                    <i>Population:</i>
                    <span>{planet.population}</span>
                  </li>
                  <li>
                    <i>Surface Water:</i>
                    <span>{planet.surface_water}</span>
                  </li>
                </ul>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Planate;
