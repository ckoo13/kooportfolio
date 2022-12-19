import Head from 'next/head';

import Navbar from '../components/Navbar';
import Hero from '../components/Hero'
import PortfolioItem from '../components/PortfolioItem';
import Emoji from '../components/Emoji';
import ExperienceItem from '../components/ExperienceItem';

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import WorkIcon from '@mui/icons-material/Work';

import { TeeTimes, Kooflix, VeloLaunch } from '../utils/portfolioitems';
import { AlphaSights, AppAcademy, CMC, Coda, JUMP } from '../utils/experience';

import { Flex, Box, Link, Text, VStack, Image, Button} from '@chakra-ui/react';
import { Tab, TabList, TabPanels, Tabs, TabPanel } from "@chakra-ui/react";



export default function Home() {

  return (
    <Flex flexDirection='column' alignItems='center'>
      <Head>
        <title>Kyung Mo (Calvin) Koo</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/goku.png" /> 
      </Head>

      <Navbar />
      <Hero />

      <Box marginBottom={{base:'20', md:'50', lg:'100'}} marginTop={{base:'0', md:'0', lg:'10'}}>
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

      {/* Portfolio Section */}

      <Text fontWeight='bold' marginBottom={{base:'2em', md:'2em', lg:'3em'}} fontSize={{base:'24px', md:'28px', lg:'36px'}} >Check out my portfolio <Emoji symbol="⬇️"/></Text>

      <VStack spacing={10}>
        <PortfolioItem project={TeeTimes} />
        <PortfolioItem project={Kooflix}/>
        <PortfolioItem project={VeloLaunch}/>
      </VStack>

      {/* Experience Section */}
      <Text fontWeight='bold' marginTop={{base:'2em', md:'2em', lg:'3em'}} marginBottom={{base:'1em', md:'1em', lg:'1em'}} fontSize={{base:'24px', md:'28px', lg:'36px'}} >Experience</Text>

      <Tabs size='sm' isFitted variant='enclosed'>
        <TabList>
          <Tab><Image borderRadius='50%' width={{base: '25%', md:'25%', lg:'25%'}} src='/alphasights.jpeg'></Image></Tab>
          <Tab><Image width={{base: '30%', md:'30%', lg:'30%'}}  src='/coda.png'></Image></Tab>
          <Tab><Image width={{base: '25%', md:'25%', lg:'25%'}}  src='/jump.png'></Image></Tab>
          <Tab><Image width={{base: '25%', md:'25%', lg:'25%'}}  src='/claremontmckenna.png'></Image></Tab>
          <Tab><Image width={{base: '50%', md:'50%', lg:'50%'}}  src='/appacademy.svg'></Image></Tab>
        </TabList>

        <TabPanels>
            <TabPanel>
              <ExperienceItem item={AlphaSights} />
            </TabPanel>
            <TabPanel>
              <ExperienceItem item={Coda} />
            </TabPanel>
            <TabPanel>
              <ExperienceItem item={JUMP} />
            </TabPanel>
            <TabPanel>
              <ExperienceItem item={CMC} />
            </TabPanel>
            <TabPanel>
              <ExperienceItem item={AppAcademy} />
            </TabPanel>
          </TabPanels>

      </Tabs>

      {/* Contact Section */}
      <VStack spacing={3} marginBottom='2em'>
        <Text fontWeight='bold' marginTop={{base:'2em', md:'2em', lg:'3em'}} fontSize={{base:'24px', md:'28px', lg:'36px'}} >Contact</Text>
        <Text textAlign='center' width='50%'>I am currently seeking full-time software engineering opportunities. Please contact me if you have such opportunities or if you are interested in working with me.</Text>
        <Button w='40%'><a href='mailto:kkoo22@students.claremontmckenna.edu' target='_blank'>Say Hello</a></Button>
      </VStack>

    </Flex>

    
  )
}
