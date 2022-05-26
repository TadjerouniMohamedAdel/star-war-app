export const fetchMovies = () =>
  fetch('http://swapi.dev/api/films')
    .then((response) => response.json())
    .then((data) => data);

export const fetchMovie = (id: number | undefined) =>
  fetch(`http://swapi.dev/api/films/${id}`)
    .then((response) => response.json())
    .then((data) => data);

export const fetchByUrl = (url: string) =>
  fetch(`${url}`)
    .then((response) => response.json())
    .then((data) => data);

export const fetchPlanets = (page: number) =>
  fetch(`http://swapi.dev/api/planets/?page=${page}`)
    .then((response) => response.json())
    .then((data) => data);
