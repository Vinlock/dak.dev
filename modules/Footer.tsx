import { FC } from 'react'
import classnames from 'classnames'
import Logo from '../assets/svg/logo.svg'

const Footer: FC<Props> = (props) => {
  const classes = classnames(props.className, [
    'bg-gray-100'
  ])

  return (
    <footer className={classes}>
      <div className="container mx-auto py-24">
        <Logo className="w-16" />
        <p className="pt-4 text-gray-500">
          Dak Washbrook
        </p>
        <p className="pt-4 text-gray-500">
          Creating solutions and expanding my knowledge.
        </p>
      </div>
    </footer>
  )
}

interface Props {
  className?: string
}

export default Footer
