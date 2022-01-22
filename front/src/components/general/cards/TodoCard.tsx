import { Box, Button, Spacer } from '@chakra-ui/react';
import Link from 'next/link';
import { MainAPIConfiguration } from '../../../config/open_api';
import { WorkApi } from '../../generated';

export const TodoCard = (props: { id: number; title: string }) => {
  const { id, title } = props;
  const deleteTask = () => {
    new WorkApi(MainAPIConfiguration).deleteWork(id).then(() => {
      alert('削除Done');
    });
  };

  return (
    <Box display={'flex'} borderBottom="1px solid" borderColor="gray.200" px="3" py="5">
      <Box maxW="80%">{title}</Box>
      <Spacer />
      <Link href={`/work/${id}`} passHref>
        <Button p={4} mx={2} colorScheme="teal">
          更新
        </Button>
      </Link>
      <Button
        p={4}
        mx={2}
        colorScheme="red"
        onClick={() => {
          deleteTask();
        }}
      >
        削除
      </Button>
    </Box>
  );
};
