import { useState, useEffect } from 'react';
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

export default function CardDetail() {
  const [work, setWork] = useState<WorkEntity>();

  const router = useRouter();
  const { id } = router.query;
  const taskId = typeof id === 'string' ? parseInt(id) : -1;
  useEffect(() => {
    if (work) {
      return;
    }
    new WorkApi(MainAPIConfiguration).getWork(taskId).then((res) => {
      setWork(res.data);
    });
  }, [router, taskId, work]);
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm({
    defaultValues: work,
  });
  const onSubmit = handleSubmit((data) => {
    new WorkApi(MainAPIConfiguration).updateWork(taskId, data).then(() => {
      alert('更新が完了しました。');
      router.push('/');
    });
  });
  return (
    <Box px={3} py={5}>
      <Heading size="md">タスクの更新</Heading>
      {work && (
        <>
          <FormControl id="title" py={4}>
            <FormLabel>タイトル</FormLabel>
            <Input required {...register('title')} defaultValue={work.title} />
          </FormControl>
          <FormControl id="discription" py={4}>
            <FormLabel>詳細な説明</FormLabel>
            <Textarea {...register('description')} defaultValue={work.description} rows={10} />
          </FormControl>
          <FormControl py={4} display="flex">
            <FormLabel>公開する</FormLabel>
            <Switch {...register('isShow')} size="lg" defaultChecked={work.isShow} />
          </FormControl>
          <Box display="flex" py={4}>
            <Spacer />
            <Button my="3" w="full" colorScheme="teal" isLoading={isSubmitting} onClick={onSubmit}>
              更新
            </Button>
          </Box>
        </>
      )}
    </Box>
  );
}
