import { Track } from '@/types/spotify/track';
import {
  HStack,
  Image,
  LinkBox,
  LinkOverlay,
  Text,
  VStack,
} from '@chakra-ui/react';

const TrackCard = ({
  album,
  albumImageUrl,
  artist,
  songUrl,
  title,
  playedAt,
}: Track) => {
  return (
    <LinkBox>
      <HStack
        spacing={4}
        px={2}
        transitionProperty='transform'
        transitionDuration='slow'
        transitionTimingFunction='ease-out'
        _hover={{ transform: 'scale(1.05, 1.05)' }}
      >
        <Image
          src={albumImageUrl}
          w={16}
          h={16}
          alt={`Album cover: ${album}`}
        />
        <VStack align='start' spacing={0}>
          <LinkOverlay
            fontSize='sm'
            fontWeight='bold'
            href={songUrl}
            isExternal
          >
            {title}
          </LinkOverlay>
          <Text fontSize='sm'>{artist}</Text>
          {playedAt && (
            <Text fontWeight='thin' fontSize='xs'>
              {playedAt}
            </Text>
          )}
        </VStack>
      </HStack>
    </LinkBox>
  );
};

export default TrackCard;
