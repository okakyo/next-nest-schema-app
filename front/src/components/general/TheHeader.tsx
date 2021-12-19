import {Box, Button, Flex,Heading,Spacer, HStack,Icon} from "@chakra-ui/react"

export const TheHeader = () =>{
    return (
    <Flex textColor="white" bgColor="gray.500" px="3" py="2" shadow="sm" align="center">
      <Box>
        <Heading size="md"  textAlign="center"> 
          Civic
        </Heading>
      </Box>
      <Spacer />
      <Box>
        <HStack>
          <Button bgColor="transparent"  size="md">
            ログイン
          </Button>
          <Button bgColor="transparent"  size="md">
            新規登録
          </Button>
        </HStack>
      </Box>
    </Flex>
    )
  }
