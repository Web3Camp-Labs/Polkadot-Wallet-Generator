import 'bootstrap/dist/css/bootstrap.min.css';
import type { AppProps } from 'next/app'
import  GlobalStyle from '../public/utils/GloablStyle'

function MyApp({ Component, pageProps }: AppProps) {
  return <div>
    <Component {...pageProps} />
    <GlobalStyle />
  </div>
}

export default MyApp
