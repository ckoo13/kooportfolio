import Head from 'next/head'

import Navbar from '../components/Navbar';
import Hero from '../components/Hero';

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import WorkIcon from '@mui/icons-material/Work';

export default function Home() {
  return (
    <div className='home-container'>
      <Head>
        <title>Kyung Mo (Calvin) Koo</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Hero />

      <div className="social-icons-container">
        <a href="https://www.linkedin.com/in/calvin-koo-9aa869158/" target='_blank'>
          <LinkedInIcon className='social-icon'></LinkedInIcon>
        </a>
        <a href="https://github.com/ckoo13" target='_blank'>
          <GitHubIcon className='social-icon'></GitHubIcon>
        </a>
        <a href="https://angel.co/u/kyung-koo" target='_blank'>
          <WorkIcon className='social-icon'></WorkIcon>
        </a>
      </div>

      
    </div>
  )
}
