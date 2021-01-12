import { IconName, IconPrefix } from '@fortawesome/pro-solid-svg-icons'

const socialMedia: SocialMedia[] = [
  {
    icon: ['fab', 'twitter'],
    hoverClasses: 'hover:text-twitter',
    iconClasses: 'text-twitter',
    title: 'Twitter',
    url: 'https://twitter.com/vinlockz',
  },
  {
    icon: ['fab', 'github'],
    hoverClasses: 'hover:text-github',
    iconClasses: 'text-github',
    title: 'Github',
    url: 'https://github.com/vinlock',
  },
  {
    icon: ['fab', 'dev'],
    hoverClasses: 'hover:text-black',
    iconClasses: 'text-black',
    title: 'Dev.to',
    url: 'https://dev.to/vinlock',
  },
  {
    icon: ['fab', 'linkedin'],
    hoverClasses: 'hover:text-linkedin',
    iconClasses: 'text-linkedin',
    title: 'LinkedIn',
    url: 'https://www.linkedin.com/in/dwashbrook/',
  },
  {
    icon: ['fab', 'instagram'],
    hoverClasses: 'hover:text-instagram',
    iconClasses: 'text-instagram',
    title: 'Instagram',
    url: 'https://instagram.com/vinlockz',
  },
]

interface SocialMedia {
  icon: [IconPrefix, IconName],
  iconClasses?: string,
  hoverClasses?: string,
  title: string
  url: string
}

export default socialMedia
