import {Box, Button, Flex, Spacer} from "@chakra-ui/react"

export const TodoCard = (props: {id:number, title:string}) =>{
  const {id, title} = props;
  return (
    <Box borderBottom="1px solid" borderColor="gray.200" px="3"  py="5">
      <Box>
        {title}
      </Box>
      <Flex>
        <Spacer />
        <Box>
          Edit
        </Box>
        <Box>Delete</Box>
      </Flex>
    </Box>
  )
}
