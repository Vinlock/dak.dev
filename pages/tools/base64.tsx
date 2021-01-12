import { useState, ChangeEvent } from 'react'
import Head from 'next/head'
import pageTitle from '../../lib/pageTitle'

const Base64Tool = () => {
  const [encoded, setEncoded] = useState<string>('')
  const [decoded, setDecoded] = useState<string>('')

  const handleEncodedKeyDown = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const value = event.currentTarget.value
    setEncoded(value)
    try {
      setDecoded(atob(value))
    } catch (e) {
      setDecoded('')
    }
  }

  const handleDecodedKeyDown = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const value = event.currentTarget.value
    setDecoded(value)
    setEncoded(btoa(value))
  }

  return (
    <div className="max-w-7xl mx-auto">
      <Head>
        <title>{pageTitle('Base64 / Tools')}</title>
      </Head>
      <h1 className="font-display text-4xl font-semibold">Base64 Tools</h1>
      <div className="w-full text-center mt-14">
        <div className="md:w-8/12 lg:w-1/2 mx-auto text-left">
          <span className="font-bold text-lg">Encoded Base64:</span>
          <textarea onChange={handleEncodedKeyDown} value={encoded} className="rounded-lg text-gray-900 bg-gray-200 border-none p-5 focus:ring-0 focus:shadow-none focus:border-none focus:bg-gray-300 w-full" rows={5} />
        </div>
        <div className="md:w-8/12 lg:w-1/2 mx-auto text-left">
          <span className="font-bold text-lg">Decoded Base64:</span>
          <textarea onChange={handleDecodedKeyDown} value={decoded} className="rounded-lg text-gray-900 bg-gray-200 border-none p-5 focus:ring-0 focus:shadow-none focus:border-none focus:bg-gray-300 w-full" rows={5} />
        </div>
      </div>
      <div className="mt-12 prose sm:prose-sm lg:prose-lg xl:prose-xl mx-auto">
        <p>Base64 is a group of binary-to-text encoding schemes in programming representing binary data (a sequence of 8-bit bytes) in a string by translating it into a radix-64 representation.</p>
      </div>
    </div>
  )
}

export default Base64Tool
