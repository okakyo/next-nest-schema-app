import { Box, Flex, Heading, Spacer, HStack } from '@chakra-ui/react';
import Link from 'next/link';

export const TheHeader = () => {
  return (
    <Flex textColor="white" bgColor="gray.500" px="3" py="2" shadow="sm" align="center">
      <Box>
        <Heading size="md" textAlign="center" cursor="pointer">
          <Link href="/" passHref>
            Next.js x Nest.js
          </Link>
        </Heading>
      </Box>
      <Spacer />
    </Flex>
  );
};
