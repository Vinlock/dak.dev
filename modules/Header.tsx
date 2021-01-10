import { FC } from 'react'
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
        <Logo className="w-20 lg:w-24" />
        <div className="text-right w-full p-1 inline-block align-middle lg:hidden">
          <span className="p-2"  onClick={() => toggleMenu()}>
            Menu <FontAwesomeIcon className="inline-block align-middle" style={{width:'15px', height: '15px'}} icon={['fas', 'chevron-right']} />
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
