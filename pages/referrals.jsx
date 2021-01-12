import Head from 'next/head'
import pageTitle from '../lib/pageTitle'
import DoordashLogo from '../assets/svg/doordash_logo.svg'

const referrals = [
  { logo: DoordashLogo },
]

const Referrals = () => {
  return (
    <div className="container mx-auto">
      <Head>
        <title>{pageTitle('Referrals')}</title>
      </Head>
      <div className="max-w-7xl mx-auto">
        <h1 className="font-display text-4xl font-semibold">Referrals</h1>
        <p className="mt-14">Coming Soon...</p>
      </div>
    </div>
  )
}

export default Referrals
