import '../styles/globals.css'
import '@animxyz/core'
import Head from 'next/head'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHome, faTimes, faChevronRight, faCaretCircleDown, faFilePdf, faPeopleArrows } from '@fortawesome/pro-solid-svg-icons'
import { faTwitter, faGithub, faLinkedin, faDev, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { MDXProvider } from '@mdx-js/react'
import { AppProvider } from '../contexts/AppContext'
import Header from '../modules/Header'
import Footer from '../modules/NewFooter'

library.add(
  faHome,
  faTimes,
  faTwitter,
  faDev,
  faGithub,
  faLinkedin,
  faChevronRight,
  faCaretCircleDown,
  faInstagram,
  faFilePdf,
  faPeopleArrows,
)

const title = 'Dak Washbrook | Software Engineer'
const description = 'Self-motivated Software Engineer with a passion for understanding and always learning.'
const keywords = 'software engineer, software developer, computer science, programming, golang, javascript, nodejs'

const App = ({ Component, pageProps }) => {
  return (
    <MDXProvider>
      <AppProvider>
        <div className="font-body">
          <Head>
            <title>{title}</title>

            {/* Primary Meta Tags */}
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />

            {/* Open Graph / Facebook */}
            <meta name="og:url" property="og:url" content="https://dak.dev" />
            <meta name="og:title" property="og:title" content={title} />
            <meta name="og:site_name" property="og:site_name" content={title} />
            <meta name="og:type" property="og:type" content="website" />
            <meta name="og:description" property="og:description" content={description} />
            <meta name="og:image" property="og:image" content="/images/social_image.jpg" />
            <meta name="og:image:width" property="og:image:width" content="1200" />
            <meta name="og:image:width" property="og:image:height" content="630" />
            <meta name="og:image:width" property="og:image:alt" content={`${title}. ${description}`} />

            {/* Twitter */}
            <meta name="twitter:card" property="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" property="twitter:url" content="https://dak.dev/" />
            <meta name="twitter:title" property="twitter:title" content={title} />
            <meta name="twitter:description" property="twitter:description" content={description} />
            <meta name="twitter:image" property="twitter:image" content="/images/social_image.jpg" />

            {/* Style and Icons */}
            <meta name="theme-color" content="#101010" />
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
            <link rel="manifest" href="/site.webmanifest" />

            {/* Fonts */}
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
          <Footer className="p-5 lg:p-8 flex-shrink-0" />
        </div>
      </AppProvider>
    </MDXProvider>
  )
}

export default App
