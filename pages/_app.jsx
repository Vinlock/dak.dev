import '../styles/globals.css'
import '@animxyz/core'
import Head from 'next/head'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHome, faTimes, faChevronRight, faCaretCircleDown } from '@fortawesome/pro-solid-svg-icons'
import { faTwitter, faGithub, faLinkedin, faDev } from '@fortawesome/free-brands-svg-icons'
import { AppProvider } from '../contexts/AppContext'
import Header from '../modules/Header'
import Footer from '../modules/Footer'

library.add(
  faHome,
  faTimes,
  faTwitter,
  faDev,
  faGithub,
  faLinkedin,
  faChevronRight,
  faCaretCircleDown,
)

const App = ({ Component, pageProps }) => {
  return (
    <AppProvider>
      <div className="font-body">
        <Head>
          <title>dak.dev</title>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link rel="preconnect" href="https://use.typekit.net" />
          <link href="https://fonts.googleapis.com/css2?family=Sen:wght@400;700;800&display=block" rel="stylesheet" />
          <link rel="preload" href="https://use.typekit.net/xlp6vrp.css" as="stylesheet" crossOrigin="anonymous" />
          <link rel="stylesheet" href="https://use.typekit.net/xlp6vrp.css" />
        </Head>
        <div className="flex flex-col items-stretch">
          <Header className="flex-shrink-0 p-5 lg:p-8" />
          <main className="flex-grow p-5 lg:p-8">
            <Component {...pageProps} />
          </main>
        </div>
        <Footer className="p-5 lg:p-8" />
      </div>
    </AppProvider>
  )
}

export default App
