import fetcher from '@/lib/fetcher';
import { Track } from '@/types/spotify/track';
import { VStack } from '@chakra-ui/react';
import useSWR from 'swr';
import TrackCard from '../track-card';

const RecentlyPlayed = () => {
  const { data } = useSWR<Track[]>('/spotify/recently-played', fetcher);

  return (
    <VStack
      w='full'
      h={96}
      align='start'
      overflowY='scroll'
      overflowX='hidden'
      py={2}
    >
      {data && data.map((track, index) => <TrackCard key={index} {...track} />)}
    </VStack>
  );
};

export default RecentlyPlayed;
