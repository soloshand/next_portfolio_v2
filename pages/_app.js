import { useEffect } from 'react';
import '../styles/index.css';
import Script from 'next/script';

function Portfolio({ Component, pageProps }) {
  
  return (
    <>
    <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-11GV7TDXDB"/>
    <Script
      id='google-analytics'
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{ 
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-11GV7TDXDB', {
            page_path: window.location.pathname,
          });
        `,
        }}
    />
    <div className="container-fluid p-0">
      <Component {...pageProps} />
     </div>
     </>
  )
}

export default Portfolio
