import type { FC } from 'react'
import type { IconName, IconPrefix } from '@fortawesome/fontawesome-common-types'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classnames from 'classnames'
import Logo from '../assets/svg/logo.svg'

const socialMedia: SocialMedia[] = [
  { name: 'Twitter', icon: ['fab', 'twitter'], url: 'https://twitter.com/vinlockz', classes: 'hover:text-twitter' },
  { name: 'Instagram', icon: ['fab', 'instagram'], url: 'https://instagram.com/vinlockz', classes: 'hover:text-instagram' },
  { name: 'Github', icon: ['fab', 'github'], url: 'https://github.com/vinlock', classes: 'hover:text-github' },
  { name: 'Dev', icon: ['fab', 'dev'], url: 'https://dev.to/vinlock', classes: 'hover:text-dev' },
  { name: 'LinkedIn', icon: ['fab', 'linkedin'], url: 'https://www.linkedin.com/in/dwashbrook/', classes: 'hover:text-linkedin' }
]

const navigationItems = [
  {
    title: 'Pages',
    items: [
      { title: 'Home', url: '/' },
      { title: 'Referrals', url: '/referrals' },
    ],
  },
]

const Footer: FC<Props> = (props) => {
  const mainClasses = classnames(props.className, 'bg-gray-100')

  return (
    <footer className={mainClasses} aria-labelledby="footerHeading">
      <h2 id="footerHeading" className="sr-only">Footer</h2>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <Logo className="w-20" />
              <p className="text-gray-500 text-base">
                Identifying and creating solutions and expanding my knowledge since 1991.
              </p>
              <div className="flex space-x-6">
                {socialMedia.map((social) => {
                  let classes = classnames('w-6 text-gray-500', {
                    [social.classes]: social.classes,
                  })

                  return (
                    <a key={social.name} href={social.url} target="_blank">
                      <FontAwesomeIcon className={classes} icon={social.icon} />
                    </a>
                  )
                })}
              </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              {navigationItems.map((item) => {
                return (
                  <div>
                    <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                      {item.title}
                    </h3>
                    <ul className="mt-4 space-y-4">
                      {item.items.map((i) => {
                        if (i.url.startsWith('http')) {
                          return (
                            <li>
                              <a href={i.url} target="_blank" className="cursor-pointer text-base text-gray-500 hover:text-gray-900">
                                {i.title}
                              </a>
                            </li>
                          )
                        }
                        return (
                          <li>
                            <Link href={i.url}>
                              <span className="cursor-pointer text-base text-gray-500 hover:text-gray-900">{i.title}</span>
                            </Link>
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 pt-8">
          <p className="text-base text-gray-400 xl:text-center">
            &copy; 2020 Dak Washbrook. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

interface Props {
  className?: string
}

interface SocialMedia {
  name: string
  icon: [IconPrefix, IconName]
  url: string
  classes?: string
}

export default Footer
