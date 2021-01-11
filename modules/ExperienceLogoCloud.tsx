import type { ElementType, FC } from 'react'
import classnames from 'classnames'
import styled from 'styled-components'
import NCSoftLogo from '../assets/svg/ncsoft_logo.svg'
import WeedmapsLogo from '../assets/svg/weedmaps_full_logo_dark_bg.svg'

const businesses: Business[] = [
  { Logo: WeedmapsLogo, name: 'Weedmaps', url: 'https://weedmaps.com', image: '/images/weedmaps_corporate_location.jpg' },
  { Logo: NCSoftLogo, name: 'NC Interactive, LLC', url: 'https://ncsoft.com', image: '/images/ncsoft_corporate_location.jpg' },
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

  if (!props.business.image) {
    classes = classnames(classes, ['bg-gray-100', 'hover:bg-gray-200'])
  }

  return (
    <Container href={props.business.url} target="_blank" image={props.business.image}>
      <div className={classes}>
        <Logo className="max-h-12 w-full shadow-lg" alt={props.business.name} />
      </div>
    </Container>
  )
}

interface Business {
  Logo: ElementType
  name: string
  url: string
  image?: string
}

interface WorkHistoryLogoProps {
  business: Business
}

const Container = styled.a<{ image?: string }>`
  position: relative;
  background-color: rgba(0,0,0);
  border-radius: 0.5rem;
  &::before {
    content: "";
    ${props => props.image ? `background-image: url('${props.image}');` : null};
    background-size: cover;
    background-position: center;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    opacity: 0.5;
    border-radius: 0.5rem;
    z-index: 0;
  }
  &:hover {
    &::before {
      opacity: 0.75;
    }
  }
`

export default ExperienceLogoCloud
