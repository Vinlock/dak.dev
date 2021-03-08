import type { FC } from 'react'
import classnames from 'classnames'
import Link from 'next/link'

const DynamicLink: FC<Props> = (props) => {
  const classes = classnames('cursor-pointer', props.className)

  if (props.href.startsWith('http')) {
    return (
      <a href={props.href} target="_blank" className={classes}>
        {props.children}
      </a>
    )
  }
  return (
    <Link href={props.href}>
      <span className={classes}>
        {props.children}
      </span>
    </Link>
  )
}

DynamicLink.defaultProps = {
  className: '',
}

interface Props {
  href: string
  className?: string
}

export default DynamicLink
