import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import Script from 'next/script'

function MyApp({ Component, pageProps }) {
  return (  
    <ChakraProvider>
      <Component {...pageProps} />

      <Script strategy='afterInteractive' 
              src="https://www.googletagmanager.com/gtag/js?id=G-VTTW78MWXC" 
      />

      <Script>
        {`window.dataLayer = window.dataLayer || []; 
          function gtag(){dataLayer.push(arguments);} 
          gtag('js', new Date()); 
          gtag('config', 'G-VTTW78MWXC');
        `}
      </Script>
    </ChakraProvider>
  )
}

export default MyApp
