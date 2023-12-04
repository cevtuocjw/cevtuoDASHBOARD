import { Container, ContainerProps } from '@chakra-ui/react';
import { motion, Variants } from 'framer-motion';
import { NextSeo } from 'next-seo';
import { ReactNode } from 'react';

const variants: Variants = {
  hidden: {
    opacity: 0,
    x: 0,
    y: -40,
    transition: { duration: 0.4, type: 'easeOut' },
  },
  enter: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 0.4, type: 'easeOut' },
  },
  exit: {
    opacity: 0,
    x: -0,
    y: 40,
    transition: { duration: 0.4, type: 'easeOut' },
  },
};

type PageProps = {
  title: string;
  description?: string;
  children: ReactNode;
};

const MotionContainer = motion<ContainerProps>(Container);

const PageLayout = ({ title, description, children }: PageProps) => {
  return (
    <>
      <NextSeo
        title='Dashboard | API'
        description={description}
        twitter={{
          cardType: 'summary_large_image',
          handle: '@cevtuo',
        }}
        openGraph={{
          url: 'https://cevtuogrnd.com',
          title: 'Dashboard | API',
          description: description,
          locale: 'en_US',
          images: [
            {
              url: 'https://cevtuopic.oss-cn-hongkong.aliyuncs.com/img/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202023-11-28%20171857.png',
              width: 1200,
              height: 1200,
              alt: 'CEVTUO',
              type: 'image/png',
            },
          ],
        }}
        additionalLinkTags={[
          {
            rel: 'icon',
            href: 'https://cevtuopic.oss-cn-hongkong.aliyuncs.com/img/cevuo-logo-small-2.ico',
          },
        ]}
      />
      <MotionContainer
        display='flex'
        w='100wh'
        maxW='100wh'
        overflow='hidden'
        p={{ base: 2, lg: 4 }}
        initial='hidden'
        animate='enter'
        exit='exit'
        variants={variants}
        centerContent
      >
        {children}
      </MotionContainer>
    </>
  );
};

export default PageLayout;
