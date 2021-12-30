import {Box, Button, Flex,Heading,Spacer, HStack,Icon} from "@chakra-ui/react"
import Link from "next/link"

export const TheHeader = () =>{
    return (
    <Flex textColor="white" bgColor="gray.500" px="3" py="2" shadow="sm" align="center">
      <Box>
        <Heading size="md"  textAlign="center" cursor="pointer">
          <Link href="/" passHref>
            Civic
          </Link>
        </Heading>
      </Box>
      <Spacer />
      <Box>
        <HStack>
          <Heading size="sm"  textAlign="center" cursor="pointer" px={5} py={3}>
            <Link href="/" passHref>
              新規登録
            </Link>
          </Heading>
          <Heading size="sm"  textAlign="center" cursor="pointer" px={5} py={3}>
            <Link href="/" passHref>
              ログイン
            </Link>
          </Heading>
        </HStack>
      </Box>
    </Flex>
    )
  }
