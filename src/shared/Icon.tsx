import type { SVGProps } from 'react'

export type IconName = 'scales' | 'briefcase' | 'heart' | 'home' | 'shield' | 'compass' | 'message' | 'eye' | 'spark' | 'chevron' | 'arrow' | 'menu' | 'close' | 'clock' | 'mail' | 'phone' | 'whatsapp' | 'check' | 'users' | 'document'

const paths: Record<IconName, string> = {
  scales: 'M12 3v18m-7-3h14M5 18l-3-8 5-3 5 3-3 8H5Zm14 0-3-8 5-3 5 3-3 8h-4Z',
  briefcase: 'M3 8h18v12H3zM8 8V5h8v3M3 13h18M10 13v2h4v-2',
  heart: 'M20.8 8.8c0 5.3-8.8 10.2-8.8 10.2S3.2 14.1 3.2 8.8A4.3 4.3 0 0 1 12 6.7a4.3 4.3 0 0 1 8.8 2.1Z',
  home: 'm3 10 9-7 9 7v10h-6v-6H9v6H3z',
  shield: 'M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Zm-3-11 2 2 4-4',
  compass: 'M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Zm4-14-2 6-6 2 2-6 6-2Z',
  message: 'M21 11.5a8.5 8.5 0 0 1-12.4 7.6L3 21l1.9-5.6A8.5 8.5 0 1 1 21 11.5Z',
  eye: 'M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7-10-7-10-7Zm10 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z',
  spark: 'm12 3 1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Zm7 12 .9 2.1L22 18l-2.1.9L19 21l-.9-2.1L16 18l2.1-.9L19 15Z',
  chevron: 'm6 9 6 6 6-6',
  arrow: 'M5 12h14m-6-6 6 6-6 6',
  menu: 'M4 7h16M4 12h16M4 17h16',
  close: 'm6 6 12 12M18 6 6 18',
  clock: 'M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Zm0-16v6l4 2',
  mail: 'M3 5h18v14H3zM3 6l9 7 9-7',
  phone: 'M7 3H5a2 2 0 0 0-2 2c0 8.8 7.2 16 16 16a2 2 0 0 0 2-2v-2l-5-2-2 3a14 14 0 0 1-7-7l3-2-3-5Z',
  whatsapp: 'M20 11.5a8.4 8.4 0 0 1-12.3 7.4L3 20l1.2-4.4A8.4 8.4 0 1 1 20 11.5ZM8 8.5c.4 2.6 2.9 5.1 5.5 5.5l1.2-1.2 2 .8c-.1 1.3-1 2.1-2.2 2.1-3.8-.2-7.8-4.2-8-8 0-1.2.8-2.1 2.1-2.2l.8 2L8 8.5Z',
  check: 'm5 12 4 4L19 6',
  users: 'M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2m7-9a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm13 9v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8',
  document: 'M6 2h9l5 5v15H6zM14 2v6h6M9 13h8m-8 4h8',
}

interface IconProps extends SVGProps<SVGSVGElement> {
  name: IconName
  size?: number
}

export function Icon({ name, size = 22, ...props }: IconProps) {
  return <svg aria-hidden="true" focusable="false" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" {...props}><path d={paths[name]} /></svg>
}
