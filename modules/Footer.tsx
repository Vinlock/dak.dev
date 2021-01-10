import { FC } from 'react'
import classnames from 'classnames'
import Logo from '../assets/svg/logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer: FC<Props> = (props) => {
  const classes = classnames(props.className, [
    'bg-gray-100'
  ])

  return (
    <footer className={classes}>
      <div className="container mx-auto pt-12 lg:pt-24">
        <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div>
            <Logo className="w-16" />
            <p className="pt-4 text-gray-500">
              Dak Washbrook
            </p>
            <p className="pt-4 text-gray-500">
              Creating solutions and expanding my knowledge.
            </p>
          </div>
          <div>

          </div>
          <div className="text-center lg:text-right">
            <a href="https://twitter.com/vinlockz" target="_blank" className="p-3">
              <FontAwesomeIcon icon={['fab', 'twitter']} className="text-twitter w-10 inline-block" />
            </a>
            <a href="https://dev.to/vinlock" target="_blank" className="p-3">
              <FontAwesomeIcon icon={['fab', 'dev']} className="text-black w-10 inline-block" />
            </a>
            <a href="https://github.com/vinlock" target="_blank" className="p-3">
              <FontAwesomeIcon icon={['fab', 'github']} className="text-github w-10 inline-block" />
            </a>
            <a href="https://www.linkedin.com/in/dwashbrook/" target="_blank" className="p-3">
              <FontAwesomeIcon icon={['fab', 'linkedin']} className="text-linkedin w-10 inline-block" />
            </a>
          </div>
        </div>
        <div className="text-center w-full text-sm text-gray-500 mt-10">
          est. 1991
        </div>
      </div>
    </footer>
  )
}

interface Props {
  className?: string
}

export default Footer
