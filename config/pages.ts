import type { IconName, IconPrefix } from '@fortawesome/pro-solid-svg-icons'

const pages: Page[] = [
  {
    icon: ['fas', 'home'],
    iconClasses: 'text-yellow-900',
    title: 'Home',
    url: '/',
  },
  {
    icon: ['fas', 'file-pdf'],
    iconClasses: 'text-blue-800',
    title: 'Resumé',
    url: 'https://cdn.dak.dev/Dak_Washbrook_Resume.pdf',
  },
  {
    icon: ['fas', 'people-arrows'],
    iconClasses: 'text-gray-500',
    title: 'Referrals',
    url: '/referrals',
  },
]

interface Page {
  icon: [IconPrefix, IconName],
  iconClasses?: string,
  title: string
  url: string
  desktopNav?: boolean
}

export default pages
