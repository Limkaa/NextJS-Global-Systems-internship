import 'bootstrap/dist/css/bootstrap.css'
import '../styles/global.css'
import '@popperjs/core'

import { useEffect } from 'react'

export default function App({ Component, pageProps }) {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap')
  }, [])

  return <Component {...pageProps} />
}
