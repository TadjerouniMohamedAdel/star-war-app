import React from 'react';
import { Card } from 'react-bootstrap';
import './styles.css';

type Props = {
  id: string;
  title: string;
  releaseDate: Date;
};
const MovieCard: React.FC<Props> = ({ title, id, releaseDate }) => (
  <Card className="card-movie" id={id}>
    <img src="/movie.jpg" alt="" />
    <div className="info">
      <span>{title}</span>
      <span>{releaseDate.getFullYear()}</span>
    </div>
  </Card>
);
export default MovieCard;
