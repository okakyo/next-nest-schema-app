import { FormControl, Input, FormLabel, Heading, Box, Button, Spacer } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import useSWR from 'swr';
export default function CardDetail() {
  const { register, handleSubmit, formState: { errors, isSubmitting }, } = useForm();
  const onSubmit = handleSubmit((data)=>console.log(data))
  return (
    <>
      <Box px={3} py={5}>
        <Heading size="md">
        タスクの更新
      </Heading>
      <FormControl id="title" py={4}>
        <FormLabel>タイトル</FormLabel>
        <Input required {...register("title")} />
      </FormControl>
      <FormControl id="discription" py={4}>
        <FormLabel>タイトル</FormLabel>
        <Input {...register("discription")}/>
      </FormControl>
      <FormControl py={4}>
        <FormLabel>タイトル</FormLabel>
        <Input />
      </FormControl>
        <Box display="flex" py={4}>
          <Spacer/>
          <Button mx={2} colorScheme="teal" isLoading={isSubmitting} onClick={onSubmit}>更新</Button>
          <Button mx={2} colorScheme="red" >削除</Button>
        </Box>
      </Box>
    </>
  );
}
