import type { NextPage } from 'next';
import { Box, Flex, Button } from '@chakra-ui/react';
import { TodoCard } from '../components/general/cards/TodoCard';
import useSWR from 'swr';
import Link from 'next/link';

const Home: NextPage = () => {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error } = useSWR('http://localhost:11000/work', fetcher);
  if (error) return <>failed to load...</>;
  if (!data) return <>Loading...</>;
  return (
    <Box py="3">
      <Flex>
        <Link href="/work/create" passHref>
          <Button colorScheme="twitter">新規作成</Button>
        </Link>
        <Box></Box>
      </Flex>
      {data.map((item: any) => {
        return <TodoCard key={item.title} id={item.id} title={item.title} />;
      })}
    </Box>
  );
};

export default Home;
