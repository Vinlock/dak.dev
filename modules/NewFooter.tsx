import type { FC } from 'react'
import type { IconName, IconPrefix } from '@fortawesome/fontawesome-common-types'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classnames from 'classnames'
import Logo from '../assets/svg/logo.svg'
import pages from '../config/pages'
import socialMediaLinks from '../config/social-media'
import legalPages from '../config/legal-pages'

const socialMedia: SocialMediaLinks[] = socialMediaLinks.map((sm) => {
  return {
    name: sm.title,
    icon: sm.icon,
    url: sm.url,
    classes: sm.hoverClasses,
  }
})

const navigationItems = [
  {
    title: 'Pages',
    items: pages.map((page) => {
      return {
        title: page.title,
        url: page.url,
      }
    }),
  },
  {
    title: 'Legal',
    items: legalPages,
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
            <div className="grid grid-cols-2 md:gap-8 md:grid-cols-4 col-span-2 lg:col-span-2">
              {navigationItems.map((item) => {
                return (
                  <div key={item.title} className="first:mt-0 mt-5 lg:mt-0">
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

interface SocialMediaLinks {
  name: string
  icon: [IconPrefix, IconName]
  url: string
  classes?: string
}

export default Footer
