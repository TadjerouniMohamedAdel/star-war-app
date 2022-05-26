import { useQuery } from 'react-query';
import { fetchByUrl } from './services';

const useGetPlanet = (url: string | null) => {
  const { data, ...rest } = useQuery(
    ['Planet', url],
    () => url && fetchByUrl(url),
    {
      keepPreviousData: true,
    }
  );
  return { planet: data ?? [], ...rest };
};
export default useGetPlanet;
