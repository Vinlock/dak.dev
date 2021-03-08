import type { ElementType, FC } from 'react'
import classnames from 'classnames'
import NCSoftLogo from '../assets/svg/ncsoft_logo.svg'
import WeedmapsLogo from '../assets/svg/weedmaps_full_logo_dark_bg.svg'

const businesses: Business[] = [
  { Logo: WeedmapsLogo, name: 'Weedmaps', url: 'https://weedmaps.com', bg: 'bg-weedmaps-hq' },
  { Logo: NCSoftLogo, name: 'NC Interactive, LLC', url: 'https://ncsoft.com', bg: 'bg-ncsoft-hq' },
]

const ExperienceLogoCloud: FC = () => {
  const gridClasses = classnames([
    'grid', 'gap-2', 'mt-6', 'lg:mt-8', 'w-full',
  ], {
    'md:grid-cols-2': !(businesses.length % 2),
    'md:grid-cols-3': !(businesses.length % 3),
  })

  return (
    <div>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <p className="text-center font-display text-2xl font-semibold uppercase text-gray-600 tracking-wider">
          Work History
        </p>
        <div className={gridClasses}>
          {businesses.map((business) => {
            return <WorkHistoryLogo key={business.name} business={business} />
          })}
        </div>
      </div>
    </div>
  )
}

const WorkHistoryLogo: FC<WorkHistoryLogoProps> = (props) => {
  const { Logo } = props.business

  let classes = classnames([
    'col-span-1', 'justify-center', 'p-12', 'rounded-lg', 'transition-all', 'duration-200',
    'cursor-pointer', 'relative'
  ])

  if (!props.business.bg) {
    classes = classnames(classes, ['bg-gray-100', 'hover:bg-gray-200'])
  }

  const linkClasses = classnames([
    'relative', 'bg-black', 'rounded-lg',
  ], [
    'before:content', 'before:bg-cover', 'before:bg-center',
    'before:absolute', 'before:top-0', 'before:left-0', 'before:right-0', 'before:bottom-0',
    'before:opacity-50', 'before:rounded-lg', 'before:z-0', 'before:hover:opacity-75',
    'hover:before:opacity-75', `before:${props.business.bg}`
  ])

  return (
    <a href={props.business.url} target="_blank" className={linkClasses}>
      <div className={classes}>
        <Logo className="max-h-12 w-full shadow-lg" alt={props.business.name} />
      </div>
    </a>
  )
}

interface Business {
  Logo: ElementType
  name: string
  url: string
  bg?: string
}

interface WorkHistoryLogoProps {
  business: Business
}

export default ExperienceLogoCloud
