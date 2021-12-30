import {Box, Button, Flex, Spacer} from "@chakra-ui/react"
import { useRouter } from "next/router";

export const TodoCard = (props: {id:number, title:string}) =>{
  const {id, title} = props;
  const router = useRouter()
  return (
    <Box borderBottom="1px solid" borderColor="gray.200" px="3"  py="5">
      <Box>
        {title}
      </Box>
      <Flex mt={2}>
        <Spacer />
        <Button mx={2} colorScheme="teal" variant='ghost' onClick={()=>router.push(`/card/${id}`)}>
          Edit
        </Button>
        <Button mx={2} colorScheme="red" variant='ghost'>
          Delete
        </Button>
      </Flex>
    </Box>
  )
}
