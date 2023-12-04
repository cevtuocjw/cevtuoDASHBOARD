import fetcher from '@/lib/fetcher';
import { Track } from '@/types/spotify/track';
import {
  Box,
  BoxProps,
  HStack,
  Icon,
  Image,
  LinkBox,
  LinkOverlay,
  Text,
  VStack,
} from '@chakra-ui/react';
import { FaSpotify } from '@react-icons/all-files/fa/FaSpotify';
import { motion } from 'framer-motion';
import useSWR from 'swr';

const AnimatedBars = () => {
  const MotionBox = motion<BoxProps>(Box);

  return (
    <HStack alignItems='end' w='auto' overflow='hidden' spacing={1}>
      <MotionBox
        w={1}
        h={3}
        bg='#1DB954'
        animate={{
          transform: [
            'scaleY(1.0) translateY(0rem)',
            'scaleY(1.5) translateY(0.4rem)',
            'scaleY(1.0) translateY(0rem)',
          ],
          transition: {
            delay: 0.1,
            duration: 1.5,
            repeat: Infinity,
            easing: ['ease-in-out'],
          },
        }}
      />
      <MotionBox
        w={1}
        h={2}
        bg='#1DB954'
        animate={{
          transform: [
            'scaleY(1.0) translateY(0rem)',
            'scaleY(3) translateY(-0.083rem)',
            'scaleY(1.0) translateY(0rem)',
          ],
          transition: {
            delay: 0.2,
            duration: 1.5,
            repeat: Infinity,
            easing: ['ease-in-out'],
          },
        }}
      />
      <MotionBox
        w={1}
        h={4}
        bg='#1DB954'
        animate={{
          transform: [
            'scaleY(1.0)  translateY(0rem)',
            'scaleY(0.5) translateY(0.37rem)',
            'scaleY(1.0)  translateY(0rem)',
          ],
          transition: {
            delay: 0.3,
            duration: 1.5,
            repeat: Infinity,
            easing: ['ease-in-out'],
          },
        }}
      />
    </HStack>
  );
};

const NowPlaying = () => {
  const { data } = useSWR<Track>('/api/spotify/now-playing', fetcher);

  return (
    <HStack w='full' h='full' justify='center' align='center'>
      {data?.isPlaying ? (
        <LinkBox>
          <HStack
            spacing={4}
            transitionProperty='transform'
            transitionDuration='slow'
            transitionTimingFunction='ease-out'
            _hover={{ transform: 'scale(1.05, 1.05)' }}
          >
            <Image
              src={data?.albumImageUrl}
              w={50}
              h={50}
              shadow='0 0 1rem #1DB954'
              alt={`Album cover: ${data?.album}`}
            />
            <VStack align='start' spacing={0}>
              <LinkOverlay fontWeight='bold' href={data.songUrl} isExternal>
                {data.title}
              </LinkOverlay>
              <Text fontSize='sm'>{data.artist}</Text>
            </VStack>
            <AnimatedBars />
          </HStack>
        </LinkBox>
      ) : (
        <>
          <Icon as={FaSpotify} w={50} h={50} name='music' color='#1DB954' />
          <Text>Not playing</Text>
        </>
      )}
    </HStack>
  );
};

export default NowPlaying;
