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

const title = 'Dak Washbrook | Software Engineer'
const description = 'Self-motivated Software Engineer with a passion for understanding and always learning.'
const keywords = 'software engineer, software developer, computer science, programming, golang, javascript, nodejs'

const App = ({ Component, pageProps }) => {
  return (
    <AppProvider>
      <div className="font-body">
        <Head>
          <title>{title}</title>
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <meta name="description" content={description} />
          <meta name="keywords" content={keywords} />
          <meta name="og:url" property="og:url" content="https://dak.dev" />
          <meta name="og:title" property="og:title" content={title} />
          <meta name="og:type" property="og:type" content="website" />
          <meta name="og:description" property="og:description" content={description} />
          <meta name="theme-color" content="#101010" />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="manifest" href="/site.webmanifest" />
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
