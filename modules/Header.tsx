import type { FC } from 'react'
import Link from 'next/link'
import classnames from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import DynamicLink from '../components/DynamicLink'
import MobileMenu from '../modules/MobileMenu'
import Logo from '../assets/svg/logo.svg'
import { useApp } from '../contexts/AppContext'
import pages from '../config/pages'

const navItems = pages.filter((page) => {
  return page.desktopNav === true
})

const Header: FC<Props> = (props) => {
  const { menuOpen, toggleMenu } = useApp()
  const classes = classnames(props.className)

  return (
    <header className={classes}>
      <div className="grid grid-cols-2 max-w-7xl mx-auto">
        <Link href="/">
          <Logo className="w-20 lg:w-24 cursor-pointer" />
        </Link>
        <div className="hidden lg:block text-right text-2xl font-display">
          <ul className="list-none space-x-8">
            {navItems.map((item) => {
              return (
                <li className="inline">
                  <DynamicLink className="hover:underline" href={item.url}>{item.title}</DynamicLink>
                </li>
              )
            })}
          </ul>
        </div>
        <div className="text-right w-full inline-block align-middle lg:hidden">
          <span onClick={() => toggleMenu()}>
            <FontAwesomeIcon icon={['fas', 'caret-circle-down']} className="inline-block" style={{height: '35px'}} />
          </span>
        </div>
      </div>
      <MobileMenu toggleOpen={toggleMenu} open={menuOpen} />
    </header>
  )
}

interface Props {
  className?: string
}

export default Header
