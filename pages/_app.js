import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css'
import '../styles/layout.css';
import '../styles/header.css';

function Portfolio({ Component, pageProps }) {
  
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.js')
  }, []);


  return (
    <div className="container-fluid">
      <Component {...pageProps} />
     </div>
  )
}

export default Portfolio
