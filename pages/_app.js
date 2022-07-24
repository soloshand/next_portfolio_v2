import { useEffect } from 'react';
import '../styles/index.css';

function Portfolio({ Component, pageProps }) {
  
  return (
    <div className="container-fluid p-0">
      <Component {...pageProps} />
     </div>
  )
}

export default Portfolio
