import { Box } from '@chakra-ui/react';
import Link from 'next/link';

export const TodoCard = (props: { id: number; title: string }) => {
  const { id, title } = props;
  return (
    <Link href={`/card/${id}`} passHref>
      <Box
        borderBottom="1px solid"
        borderColor="gray.200"
        px="3"
        py="5"
        cursor="pointer"
        _hover={{ shadow: 'md' }}
      >
        <Box>{title}</Box>
      </Box>
    </Link>
  );
};
