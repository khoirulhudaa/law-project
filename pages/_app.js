import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap'
import "../styles/global/globals.css";

function MyApp({ Component, pageProps }) {
  return( 
    <>
   <Component {...pageProps} />
    </>
   )
}

export default MyApp
