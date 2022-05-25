export const fetchMovies = () =>
  fetch('http://swapi.dev/api/films')
    .then((response) => response.json())
    .then((data) => data);

export const fetchPlanets = () => fetch('http://swapi.dev/api/films');
