import type { FC } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import classnames from 'classnames'
import pages from '../../config/legal-pages'
import pageTitle from '../../lib/pageTitle'

const MarkdownLayout: FC<Props> = (props) => {
  const router = useRouter()

  const handleSelectChange = (event) => {
    const value = event.target.value
    return router.push(value)
  }

  return (
    <div className="max-w-7xl mx-auto prose">
      <Head>
        <title>{pageTitle(`${props.title} / Legal`)}</title>
      </Head>
      <h1>Legal</h1>
      <div>
        <div className="sm:hidden">
          <label htmlFor="tabs" className="sr-only">Select a tab</label>
          <select id="tabs" name="tabs" onChange={handleSelectChange} className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm rounded-md">
            {pages.map((page) => {
              return (
                <option key={page.title} selected={router.pathname.includes(page.url)} value={page.url}>{page.title}</option>
              )
            })}
          </select>
        </div>
        <div className="hidden sm:block">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8" aria-label="Tabs">
              {pages.map((page) => {
                const isCurrentPage = router.pathname.includes(page.url)
                const classes = classnames({
                  'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300': !isCurrentPage,
                  'border-black text-black': isCurrentPage,
                }, 'whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm cursor-pointer')
                return (
                  <Link href={page.url}>
                    <span className={classes}>
                      {page.title}
                    </span>
                  </Link>
                )
              })}
            </nav>
          </div>
        </div>
      </div>
      <div className="mt-10 sm:prose-sm lg:prose-lg xl:prose-xl">
        {props.children}
      </div>
    </div>
  )
}

interface Props {
  title?: string
}

export default MarkdownLayout
