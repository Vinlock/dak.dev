import { FC } from 'react'
import classnames from 'classnames'
import type { IconPrefix, IconName } from '@fortawesome/pro-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const menuLinks: MenuLinkGroup[] = [
  {
    title: 'Pages',
    menuItems: [
      { icon: ['fas', 'home'], title: 'Home', url: '/' },
    ]
  }
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
  })

  return (
    <div className={classes}>
      <nav className="w-full bg-white shadow-xl rounded-lg relative pb-5">
        <div className="absolute top-0 right-0 p-5 active:border-gray-100 rounded-lg" onClick={props.toggleOpen}>
          <FontAwesomeIcon icon={['fas', 'times']} className="text-gray-700 hover:cursor-pointer w-sm-icon h-sm-icon" />
        </div>
        {menuLinks.map((link) => {
          const headerKey = `${link.title}_header`
          const menuGroup = `${link.title}_group`
          return [
            <h3 key={headerKey} className="uppercase font-display font-bold text-gray-700 mb-3 px-5 pt-5">{link.title}</h3>,
            <div key={menuGroup} className="grid grid-cols-2 gap-3 border-b border-dashed px-5 pb-6">
              {link.menuItems.map((item) => {
                const key = `${item.title}_item`
                return <MenuLink key={key} icon={item.icon} title={item.title} url={item.url} />
              })}
            </div>
          ]
        })}
      </nav>
    </div>
  )
}

const MenuLink: FC<MenuLinkProps> = (props) => {
  return (
    <div className="pb-0 pl-0.5 flex items-center h-sm-icon">
      <FontAwesomeIcon className="inline-block mr-3 w-sm-icon" icon={props.icon} /> {props.title}
    </div>
  )
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

interface MenuLinkProps {
  icon?: [IconPrefix, IconName]
  title: string
  url: string
}

interface MenuLinkGroup {
  title: string
  menuItems: MenuLinkItem[]
}

interface MenuLinkItem {
  icon: [IconPrefix, IconName],
  title: string
  url: string
}

export default MobileMenu
