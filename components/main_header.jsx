import Link from 'next/link'
import MainHeaderLink from './main_header_links'

export default function MainHeader() {
  return (
    <header id='main-header'>
      <div id='logo'>
        <Link href='/'>NextNews</Link>
      </div>
      <nav>
        <ul>
          <li>
            <MainHeaderLink href='/news'>News</MainHeaderLink>
          </li>
          <li>
            <MainHeaderLink href='/archive'>Archive</MainHeaderLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}
