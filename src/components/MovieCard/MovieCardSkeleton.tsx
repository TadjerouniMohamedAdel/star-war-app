import React from 'react';
import { Card, Placeholder } from 'react-bootstrap';

const MovieCardSkeleton = () => (
  <Card className="card-movie">
    <Placeholder bg="dark" animation="wave" className="img">
      <Placeholder />
    </Placeholder>
    <div className="info">
      <Placeholder as="span" animation="wave">
        <Placeholder xs={8} />
      </Placeholder>
      <Placeholder as="span" animation="wave">
        <Placeholder xs={8} />
      </Placeholder>
    </div>
  </Card>
);

export default MovieCardSkeleton;
