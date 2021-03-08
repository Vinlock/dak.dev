import Head from 'next/head'
import DynamicLink from '../components/DynamicLink'
import pageTitle from '../lib/pageTitle'
import DoordashLogo from '../assets/svg/doordash_logo.svg'
import Image from 'next/image'

const referrals = [
  {
    image: '/images/doordash_referral.jpg',
    category: 'Food & Drink',
    title: 'Doordash',
    descrption: 'Get $30 off ($10 off your first 3 orders).',
    actionText: 'Sign Up!',
    url: 'https://drd.sh/OAIoUf/',
    Logo: DoordashLogo,
  },
  {
    image: '/images/doordash_referral.jpg',
    category: 'Food & Drink',
    title: 'Uber Eats',
    descrption: 'Get $20 off your first order • $25 minimum order',
    code: 'eats-r9roj',
    actionText: 'Sign Up!',
    url: 'http://ubr.to/EatsGiveGet',
  },
]

const Referrals = () => {
  return (
    <div className="container mx-auto">
      <Head>
        <title>{pageTitle('Referrals')}</title>
      </Head>
      <div className="max-w-7xl mx-auto">
        <h1 className="font-display text-4xl font-semibold mb-12">Referrals</h1>
        <div className="space-y-10">
          {referrals.map((referral) => {
            return (
              <div className="relative text-black rounded-lg">
                <div className="h-56 bg-white sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2 rounded-l-lg">
                  <Image src={referral.image} layout="fill" className="w-full h-full object-cover rounded-lg" alt={referral.title} />
                </div>
                <div className="relative max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 lg:py-6">
                  <div className="md:ml-auto md:w-1/2 md:pl-10">
                    {referral.Logo ? <referral.Logo className="w-48" /> : null}
                    <h2 className="text-base font-semibold uppercase tracking-wider">
                      {referral.category}
                    </h2>
                    <p
                      className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">
                      {referral.title}
                    </p>
                    <p className="mt-3 text-lg">{referral.descrption}</p>
                    <div className="mt-8 text-right">
                      <div className="inline-flex rounded-md shadow">
                        <DynamicLink href="#" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-black">
                          {referral.actionText}
                          <svg className="-mr-1 ml-3 h-5 w-5 text-gray-400"
                               xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                               fill="currentColor" aria-hidden="true">
                            <path
                              d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"/>
                            <path
                              d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"/>
                          </svg>
                        </DynamicLink>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Referrals
