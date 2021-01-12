import type { FC } from 'react'
import Link from 'next/link'
import classnames from 'classnames'
import type { IconPrefix, IconName } from '@fortawesome/pro-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import pages from '../config/pages'
import socialMedia from '../config/social-media'

const menuLinks: MenuLinkGroup[] = [
  { title: 'Pages', menuItems: pages },
  { title: 'Find Me On', menuItems: socialMedia },
]

const MobileMenu: FC<Props> = (props) => {
  const classes = classnames([
    'absolute', 'md:hidden', 'top-0', 'left-0', 'right-0', 'w-full',
    'p-5', 'transition-all', 'duration-400', 'ease-in-out', 'transform',
    'origin-top-right',
  ], {
    'opacity-100': props.open,
    'opacity-0': !props.open,
    'scale-100': props.open,
    'scale-75': !props.open,
    'pointer-events-none': !props.open,
  })

  return (
    <div className={classes}>
      <nav className="w-full bg-white shadow-xl rounded-lg relative pb-5">
        <div className="absolute top-0 right-0 p-5 active:border-gray-100 rounded-lg" onClick={props.toggleOpen}>
          <FontAwesomeIcon icon={['fas', 'times']} className="text-gray-700 hover:cursor-pointer" style={{width: '20px'}} />
        </div>
        {menuLinks.map((link) => {
          const headerKey = `${link.title}_header`
          const menuGroup = `${link.title}_group`
          return [
            <h3 key={headerKey} className="uppercase font-display font-bold text-gray-700 mb-5 px-5 pt-5">{link.title}</h3>,
            <div key={menuGroup} className="grid grid-cols-2 gap-3 border-b border-dashed px-5 pb-6">
              {link.menuItems.map((item) => {
                const iconClasses = classnames('inline-block mr-3 w-sm-icon', item.iconClasses)
                return (
                  <div className="pb-0 pl-0.5 h-sm-icon" key={item.title}>
                    <LinkComponent href={item.url}>
                      <span className="flex flex-wrap items-center cursor-pointer">
                        <FontAwesomeIcon className={iconClasses} icon={item.icon} /> {item.title}
                      </span>
                    </LinkComponent>
                  </div>
                )
              })}
            </div>
          ]
        })}
      </nav>
    </div>
  )
}

const LinkComponent: FC<LinkComponentProps> = (props) => {
  if (props.href.startsWith('http')) {
    return (
      <a href={props.href} target="_blank">
        {props.children}
      </a>
    )
  }
  return (
    <Link href={props.href}>
      {props.children}
    </Link>
  )
}

interface LinkComponentProps {
  href: string
}

MobileMenu.defaultProps = {
  className: '',
  open: false,
  toggleOpen: () => {},
}

interface Props {
  className?: string
  open?: boolean
  toggleOpen?: () => void
}

interface MenuLinkGroup {
  title: string
  menuItems: MenuLinkItem[]
}

interface MenuLinkItem {
  icon: [IconPrefix, IconName],
  iconClasses?: string,
  title: string
  url: string
}

export default MobileMenu
