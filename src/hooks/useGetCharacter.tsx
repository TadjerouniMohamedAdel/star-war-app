import { useQuery } from 'react-query';
import { fetchByUrl } from './services';

const useGetCharacter = (url: string) => {
  const { data, ...rest } = useQuery(
    ['Character', url],
    () => fetchByUrl(url),
    {
      keepPreviousData: true,
    }
  );
  return { character: data ?? [], ...rest };
};
export default useGetCharacter;
