import fetcher from '@/lib/fetcher';
import { Activity } from '@/types/wakatime/Activity';
import { Text, VStack } from '@chakra-ui/react';
import useSWR from 'swr';

const GlobalStats = () => {
  const { data } = useSWR<Activity>('stats/activity', fetcher);
  return (
    <VStack spacing={2} align='start' justify='center' h='full' p={4}>
      {data && (
        <>
          <Text>{`Developed time: ${data.total}`}</Text>
          <Text>{`Time in seconds: ${data.total_seconds}`}</Text>
        </>
      )}
    </VStack>
  );
};

export default GlobalStats;
