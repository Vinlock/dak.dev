import type { FC } from 'react'
import classnames from 'classnames'

const Panel: FC<Props> = (props) => {
  const classes = classnames(props.className, {
    'flex': props.center,
    'items-center': props.center,
    'justify-center': props.center,
    'min-h-mobile-panel': !props.fit,
    'lg:min-h-panel': !props.fit,
  })

  return (
    <div className={classes}>
      {props.children}
    </div>
  )
}

Panel.defaultProps = {
  className: '',
  fit: false,
  center: false,
}

interface Props {
  className?: string
  fit?: boolean
  center?: boolean
}

export default Panel
