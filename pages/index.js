import Head from 'next/head'

import Navbar from '../components/Navbar';
import Hero from '../components/Hero'
import PortfolioItem from '../components/PortfolioItem';

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import WorkIcon from '@mui/icons-material/Work';

import { TeeTimes } from '../utils/portfolioitems';

import { Flex, Box, Link } from '@chakra-ui/react';



export default function Home() {

  return (
    <Flex flexDirection='column' alignItems='center'>
      <Head>
        <title>Kyung Mo (Calvin) Koo</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" /> 
      </Head>

      <Navbar />
      <Hero />

      <Box marginBottom={{base:'20', md:'50', lg:'100'}} marginTop={{base:'0', md:'10', lg:'20'}}>
        <Link href="https://www.linkedin.com/in/calvin-koo-9aa869158/" target='_blank'>
          <LinkedInIcon className='social-icon'></LinkedInIcon>
        </Link>
        <Link href="https://github.com/ckoo13" target='_blank'>
          <GitHubIcon className='social-icon'></GitHubIcon>
        </Link>
        <Link href="https://angel.co/u/kyung-koo" target='_blank'>
          <WorkIcon className='social-icon'></WorkIcon>
        </Link>
      </Box>

      <PortfolioItem project={TeeTimes} />
    </Flex>
  )
}
