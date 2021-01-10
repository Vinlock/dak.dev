import type { FC } from 'react'
import Link from 'next/link'
import classnames from 'classnames'
import MobileMenu from '../modules/MobileMenu'
import Logo from '../assets/svg/logo.svg'
import { useApp } from 'contexts/AppContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Header: FC<Props> = (props) => {
  const { menuOpen, toggleMenu } = useApp()
  const classes = classnames(props.className)

  return (
    <header className={classes}>
      <div className="grid grid-cols-2">
        <Link href="/">
          <Logo className="w-20 lg:w-24" />
        </Link>
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
