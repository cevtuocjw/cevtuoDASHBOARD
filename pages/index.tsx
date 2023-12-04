import GlobalStats from '@/components/global-stats';
import LanguagesChart from '@/components/languages-chart';
import NowPlaying from '@/components/now-playing';
import PageLayout from '@/components/page-layout';
import ProjectsChart from '@/components/projects-chart';
import RecentlyPlayed from '@/components/recently-played';
import ThemeButton from '@/components/theme-button';
import TopTracks from '@/components/top-tracks';
import {
  Button,
  Divider,
  Heading,
  HStack,
  Link,
  SimpleGrid,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import { FaGithub } from '@react-icons/all-files/fa/FaGithub';
import { GiHealthPotion } from '@react-icons/all-files/gi/GiHealthPotion';
import { ImSphere } from '@react-icons/all-files/im/ImSphere';
import { AiFillWechat } from "react-icons/ai";

const IndexPage = () => {
  return (
    <PageLayout title='Dashboard' description="CEVTUO API">
      <VStack w='full' align='center' justify='center' py={4}>
        <HStack spacing={4}>
          <ThemeButton />
          <Heading>cevtuo API</Heading>
        </HStack>
        <Divider />
        <Text>CEVTUO DASHBOARDD</Text>
      </VStack>
      
      <Stack direction={{ base: 'column', lg: 'row' }} w='full'>
        <VStack spacing={2} w={{ base: 'full', lg: '50%' }}>
          <Heading fontSize='xl' p={2} textAlign='left' w='full'>
            cevtuo Spotify Top Tracks
          </Heading>
          <Divider />
          <TopTracks />
        </VStack>
        <VStack spacing={2} w={{ base: 'full', lg: '50%' }}>
          <Heading fontSize='xl' p={2} textAlign='left' w='full'>
            cevtuo Spotify Recently Played
          </Heading>
          <Divider />
          <RecentlyPlayed />
        </VStack>
      </Stack>
      <SimpleGrid
        columns={{ base: 1, lg: 4 }}
        w='full'
        mt={4}
        gap={4}
        justifyItems='center'
      >
        <NowPlaying />
        <Link href='https://cevtuogrnd.com' isExternal>
          <Button
            colorScheme='blue'
            size='lg'
            variant='outline'
            boxShadow='md'
            _focus={{ outline: 'none' }}
            leftIcon={<ImSphere />}
          >
            CEVTUOGRND
          </Button>
        </Link>
        <Link href='https://lite.cevtuogrnd.com' isExternal>
          <Button
            colorScheme='gray'
            size='lg'
            variant='outline'
            boxShadow='md'
            _focus={{ outline: 'none' }}
            leftIcon={<ImSphere />}
          >
            CEVTUOGRND LITE
          </Button>
        </Link>
        <Link href='https://cevtuogrnd.com/wechat/' isExternal>
          <Button
            colorScheme='green'
            size='lg'
            variant='outline'
            boxShadow='md'
            _focus={{ outline: 'none' }}
            leftIcon={<AiFillWechat />}
          >
            CEVTUO wechat
          </Button>
        </Link>

       
      </SimpleGrid>
    </PageLayout>
  );
};

export default IndexPage;
