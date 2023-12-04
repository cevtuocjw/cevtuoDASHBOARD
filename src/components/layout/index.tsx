import { Box } from '@chakra-ui/react';
import { ReactNode } from 'react';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return <Box as='main'>{children}</Box>;
};

export default Layout;
