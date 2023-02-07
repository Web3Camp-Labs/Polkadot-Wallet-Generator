import type { AppProps } from 'next/app'
// import  GlobalStyle from '../public/utils/GloablStyle'

import 'bootstrap/dist/css/bootstrap.min.css';

function MyApp({ Component, pageProps }: AppProps) {
  return <div>
    <Component {...pageProps} />
    {/*<GlobalStyle />*/}
    <link rel="stylesheet" href="./globals.css"/>
  </div>
}

export default MyApp
