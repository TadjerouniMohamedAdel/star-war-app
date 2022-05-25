import { useQuery } from 'react-query';
import { fetchMovies } from './services';

const useGetMoviesList = () => {
  const { data, ...rest } = useQuery(['movies'], () => fetchMovies(), {
    keepPreviousData: true,
  });
  return { movies: data ?? [], ...rest };
};
export default useGetMoviesList;
