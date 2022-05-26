import React from 'react';
import { Link } from 'react-router-dom';
import './styles2.css';

type Props = {
  planet: { name: string; terrain: string; url: string };
};
const PlanetCard2: React.FC<Props> = ({ planet }) => (
  <Link
    to={`/planetes/${planet.url.split('https://swapi.dev/api/planets/')[1]}`}
  >
    <div className="planet-card">
      <div className="imgBox">
        <img src="/galaxy.jpg" alt="" />
      </div>
      <div className="info">
        <span>{planet.name}</span>
        <span>
          <i>{planet.terrain}</i>
        </span>
      </div>
    </div>
  </Link>
);

export default PlanetCard2;
