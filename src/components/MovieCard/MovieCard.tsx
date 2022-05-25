import React from 'react';
import { Card } from 'react-bootstrap';
import './styles.css';

const MovieCard: React.FC = () => (
  <Card className="card-movie">
    <img src="/movie.jpg" alt="" />
    <div className="info">
      <span>Title Movie</span>
      <span>2019</span>
    </div>
  </Card>
);
export default MovieCard;
