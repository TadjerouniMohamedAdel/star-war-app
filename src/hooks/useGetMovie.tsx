import { useQuery } from 'react-query';
import { fetchMovie } from './services';

const useGetMovie = (id: number | undefined) => {
  const { data, ...rest } = useQuery(['movie', id], () => fetchMovie(id), {
    keepPreviousData: true,
  });
  return { movie: data ?? [], ...rest };
};
export default useGetMovie;
