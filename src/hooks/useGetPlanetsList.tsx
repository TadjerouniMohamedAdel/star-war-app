import { QueryClient, useQuery } from 'react-query';
import { fetchPlanets } from './services';

const useGetPlanetsList = (page: number) => {
  const queryClient = new QueryClient();
  const { data, ...rest } = useQuery(
    ['planets', page],
    () => fetchPlanets(page),
    {
      keepPreviousData: true,
      onSuccess: () => {
        queryClient.invalidateQueries(['planets', page + 1]);
        queryClient.invalidateQueries(['planets', page - 1]);
      },
    }
  );
  return { planets: data ?? [], ...rest };
};
export default useGetPlanetsList;
