'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function MainHeaderLink({ children, href }) {
  const path = usePathname()

  const active = path.startsWith(href)

  return (
    <Link
      className={active ? 'active' : undefined}
      href={href}
    >
      {children}
    </Link>
  )
}
