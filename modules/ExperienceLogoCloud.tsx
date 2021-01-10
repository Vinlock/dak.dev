import type { ElementType } from 'react'
import classnames from 'classnames'
import NCSoftLogo from '../assets/svg/ncsoft_logo.svg'
import WeedmapsLogo from '../assets/svg/weedmaps_full_logo.svg'

const businesses: Business[] = [
  { Icon: WeedmapsLogo, name: 'Weedmaps', url: 'https://weedmaps.com' },
  { Icon: NCSoftLogo, name: 'NC Interactive, LLC', url: 'https://ncsoft.com' },
]

const ExperienceLogoCloud = () => {
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
          Current and Previous Employers
        </p>
        <div className={gridClasses}>
          {businesses.map((business) => {
            return (
              <a href={business.url} target="_blank">
                <div className="col-span-1 justify-center py-8 px-8 bg-gray-100 rounded-lg transition-all duration-200 hover:bg-gray-200 cursor-pointer">
                  <business.Icon className="max-h-12 w-full" alt={business.name} />
                </div>
              </a>
            )
          })}
        </div>
      </div>
    </div>
  )
}

interface Business {
  Icon: ElementType
  name: string
  url: string
}

export default ExperienceLogoCloud
