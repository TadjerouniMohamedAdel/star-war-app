import { useQuery } from 'react-query';
import { fetchByUrl } from './services';

const useGetPlanet = (url: string) => {
  const { data, ...rest } = useQuery(['Planet', url], () => fetchByUrl(url), {
    keepPreviousData: true,
  });
  return { planet: data ?? [], ...rest };
};
export default useGetPlanet;
