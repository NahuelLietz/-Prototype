import reactLogo from '../assets/react.svg'
import viteLogo from '../assets/vite.svg'

const nextSteps = [
  {
    id: 'docs',
    iconId: 'documentation-icon',
    title: 'Documentation',
    description: 'Your questions, answered',
    links: [
      {
        href: 'https://vite.dev/',
        label: 'Explore Vite',
        icon: { type: 'image', src: viteLogo, className: 'logo' },
      },
      {
        href: 'https://react.dev/',
        label: 'Learn more',
        icon: { type: 'image', src: reactLogo, className: 'button-icon' },
      },
    ],
  },
  {
    id: 'social',
    iconId: 'social-icon',
    title: 'Connect with us',
    description: 'Join the Vite community',
    links: [
      {
        href: 'https://github.com/vitejs/vite',
        label: 'GitHub',
        icon: { type: 'sprite', id: 'github-icon', className: 'button-icon' },
      },
      {
        href: 'https://chat.vite.dev/',
        label: 'Discord',
        icon: { type: 'sprite', id: 'discord-icon', className: 'button-icon' },
      },
      {
        href: 'https://x.com/vite_js',
        label: 'X.com',
        icon: { type: 'sprite', id: 'x-icon', className: 'button-icon' },
      },
      {
        href: 'https://bsky.app/profile/vite.dev',
        label: 'Bluesky',
        icon: { type: 'sprite', id: 'bluesky-icon', className: 'button-icon' },
      },
    ],
  },
]

export default nextSteps
