'use client'

import { useMediaQuery } from '@/app/hooks/use-media-qurery'
import { Desktop } from './desktop'
import { Mobile } from './mobile'

export function Menu() {
  const isDesktop = useMediaQuery('(min-width: 768px)')

  return isDesktop ? <Desktop /> : <Mobile />
}
