import type { FC } from 'react'
import type { IconName, IconPrefix } from '@fortawesome/fontawesome-common-types'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classnames from 'classnames'
import Logo from '../assets/svg/logo.svg'

const socialMedia: SocialMedia[] = [
  { name: 'Twitter', icon: ['fab', 'twitter'], url: 'https://twitter.com/vinlockz', classes: 'hover:text-twitter' },
  { name: 'Github', icon: ['fab', 'github'], url: 'https://github.com/vinlock', classes: 'hover:text-github' },
  { name: 'Dev', icon: ['fab', 'dev'], url: 'https://dev.to/vinlock', classes: 'hover:text-dev' },
  { name: 'LinkedIn', icon: ['fab', 'linkedin'], url: 'https://www.linkedin.com/in/dwashbrook/', classes: 'hover:text-linkedin' },
  { name: 'Instagram', icon: ['fab', 'instagram'], url: 'https://instagram.com/vinlockz', classes: 'hover:text-instagram' },
]

const navigationItems = [
  {
    title: 'Pages',
    items: [
      { title: 'Home', url: '/' },
      // { title: 'Referrals', url: '/referrals' },
      { title: 'Resumé', url: 'https://cdn.dak.dev/Dak_Washbrook_Resume.pdf' },
    ],
  },
  {
    title: 'Legal',
    items: [
      { title: 'Privacy Policy', url: '/legal/privacy-policy' },
      { title: 'Cookie Policy', url: '/legal/cookie-policy' },
      { title: 'Terms of Service', url: '/legal/terms-of-service' },
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
          <div className="space-y-6 xl:col-span-1">
            <Link href="/">
              <Logo className="cursor-pointer w-20 fill-current text-gray-500" />
            </Link>
            <p className="text-gray-500 text-base pt-2">
              Identifying and creating solutions all while expanding my knowledge since 1991.
            </p>
            <div className="flex space-x-4">
              {socialMedia.map((social) => {
                let classes = classnames('w-6 text-gray-500', {
                  [social.classes]: social.classes,
                })

                return (
                  <a key={social.name} className="p-2" href={social.url} target="_blank">
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
                  <div key={item.title}>
                    <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                      {item.title}
                    </h3>
                    <ul className="mt-4 space-y-4">
                      {item.items.map((i) => {
                        if (i.url.startsWith('http')) {
                          return (
                            <li key={i.title}>
                              <a href={i.url} target="_blank" className="cursor-pointer text-base text-gray-500 hover:text-gray-900">
                                {i.title}
                              </a>
                            </li>
                          )
                        }
                        return (
                          <li key={i.title}>
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
