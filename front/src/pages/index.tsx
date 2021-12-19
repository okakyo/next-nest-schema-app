import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {Box} from "@chakra-ui/react";
import {TodoCard} from '../components/general/cards/TodoCard';

const Home: NextPage = () => {
  return(
    <Box p="3">
      {[1,2,3,4,5].map((item)=>{
          return (
            <>
              <TodoCard key={item}/>
            </>
          )
        })}
    </Box>
  )
}

export default Home
