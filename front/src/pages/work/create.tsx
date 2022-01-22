import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import {
  FormControl,
  Input,
  FormLabel,
  Heading,
  Box,
  Button,
  Spacer,
  Textarea,
  Switch,
} from '@chakra-ui/react';

import { WorkEntity, WorkApi } from '../../components/generated';
import { MainAPIConfiguration } from '../../config/open_api';

export default function CardCreate() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<WorkEntity>();
  const onSubmit = handleSubmit((data) => {
    new WorkApi(MainAPIConfiguration).createWork(data).then(() => {
      alert('作成しました。');
      router.push('/');
    });
  });
  return (
    <Box px={3} py={5}>
      <Heading size="md">タスクの作成</Heading>
      {
        <>
          <FormControl id="title" py={4}>
            <FormLabel>タイトル</FormLabel>
            <Input required {...register('title')} />
          </FormControl>
          <FormControl id="discription" py={4}>
            <FormLabel>詳細な説明</FormLabel>
            <Textarea {...register('description')} rows={10} />
          </FormControl>
          <FormControl py={4} display="flex">
            <FormLabel>公開する</FormLabel>
            <Switch {...register('isShow')} size="lg" />
          </FormControl>
          <Box display="flex" py={4}>
            <Spacer />
            <Button my="3" w="full" colorScheme="teal" isLoading={isSubmitting} onClick={onSubmit}>
              更新
            </Button>
          </Box>
        </>
      }
    </Box>
  );
}
