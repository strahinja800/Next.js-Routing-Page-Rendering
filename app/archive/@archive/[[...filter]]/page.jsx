import Link from 'next/link'

import NewsList from '@/components/news_list'
import {
  getAvailableNewsMonths,
  getAvailableNewsYears,
  getNewsForYear,
  getNewsForYearAndMonth,
} from '@/lib/news'

export default function FilteredNewsPage({ params }) {
  const filter = params.filter

  const selectedYear = filter?.[0]
  const selectedMonth = filter?.[1]

  let news
  let links = getAvailableNewsYears()

  if (selectedYear && !selectedMonth) {
    news = getNewsForYear(selectedYear)
    links = getAvailableNewsMonths(selectedYear)
  }
  if (selectedYear && selectedMonth) {
    news = getNewsForYearAndMonth(selectedYear, selectedMonth)
    links = [] // For empty navigation when filtering by year and month
  }

  let newsContent = <p>No news found.</p>

  if (news) {
    newsContent = <NewsList news={news} />
  }

  if (
    // Plus sign is used to convert string to number so that we dont get type mismatch
    (selectedYear && !getAvailableNewsYears().includes(+selectedYear)) ||
    (selectedMonth &&
      !getAvailableNewsMonths(selectedYear).includes(+selectedMonth))
  ) {
    throw new Error('Invalid filer.')
  }

  return (
    <>
      <header id='archive-header'>
        <nav>
          <ul>
            {links.map(link => {
              const href = selectedYear
                ? `/archive/${selectedYear}/${link}`
                : `/archive/${link}`
              return (
                <li key={link}>
                  <Link href={href}>{link}</Link>
                </li>
              )
            })}
          </ul>
        </nav>
      </header>
      {newsContent}
    </>
  )
}
