import Head from 'next/head'
import DoordashLogo from '../assets/svg/doordash_logo.svg'

const referrals = [
  { logo: DoordashLogo },
]

const Referrals = () => {
  return (
    <div className="container mx-auto">
      <Head>
        <title>Referrals - Dak Washbrook | Software Engineer</title>
      </Head>
      <h1 className="font-display text-4xl font-semibold">Referrals</h1>

    </div>
  )
}

export default Referrals
