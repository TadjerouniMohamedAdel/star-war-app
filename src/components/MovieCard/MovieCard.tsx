import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './styles.css';

type Props = {
  id: number;
  title: string;
  releaseDate: Date;
};
const MovieCard: React.FC<Props> = ({ title, id, releaseDate }) => (
  <Link to={`/movies/${id}`}>
    <Card className="card-movie">
      <img src="/movie.jpg" alt="" />
      <div className="info">
        <span>{title}</span>
        <span>{releaseDate.getFullYear()}</span>
      </div>
    </Card>
  </Link>
);
export default MovieCard;
