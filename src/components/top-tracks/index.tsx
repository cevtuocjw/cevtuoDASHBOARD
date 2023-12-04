import fetcher from '@/lib/fetcher';
import { Track } from '@/types/spotify/track';
import { VStack } from '@chakra-ui/react';
import useSWR from 'swr';
import TrackCard from '../track-card';

const TopTracks = () => {
  const { data } = useSWR<Track[]>('/spotify/top-tracks', fetcher);

  return (
    <VStack
      w='full'
      h={96}
      align='start'
      overflowY='scroll'
      overflowX='hidden'
      py={2}
    >
      {data && data.map((track) => <TrackCard key={track.title} {...track} />)}
    </VStack>
  );
};

export default TopTracks;
