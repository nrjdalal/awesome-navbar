import Header from '../components/Header'
import '../styles/_app.scss'

function _app({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  )
}

export default _app
