import Link from 'next/link'

import NewsList from '@/components/news_list'
import {
  getAvailableNewsMonths,
  getAvailableNewsYears,
  getNewsForYear,
  getNewsForYearAndMonth,
} from '@/lib/news'
import { Suspense } from 'react'

async function FilterHeader({ year, month }) {
  const availableYears = await getAvailableNewsYears()
  let links = availableYears

  if (
    (year && !availableYears.includes(year)) ||
    (month && !getAvailableNewsMonths(year).includes(month))
  ) {
    throw new Error('Invalid filer.')
  }

  if (year && !month) {
    links = getAvailableNewsMonths(year)
  }
  if (year && month) {
    links = [] // For empty navigation when filtering by year and month
  }

  return (
    <header id='archive-header'>
      <nav>
        <ul>
          {links.map(link => {
            const href = year ? `/archive/${year}/${link}` : `/archive/${link}`
            return (
              <li key={link}>
                <Link href={href}>{link}</Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </header>
  )
}

async function FilteredNews({ year, month }) {
  let news

  if (year && !month) {
    news = await getNewsForYear(year)
  } else if (year && month) {
    news = await getNewsForYearAndMonth(year, month)
  }

  let newsContent = <p>No news found.</p>

  if (news) {
    newsContent = <NewsList news={news} />
  }

  return newsContent
}

export default async function FilteredNewsPage({ params }) {
  const filter = (await params).filter

  const selectedYear = filter?.[0]
  const selectedMonth = filter?.[1]

  return (
    <>
      <Suspense fallback={<p>Loading News...</p>}>
        <FilterHeader
          year={selectedYear}
          month={selectedMonth}
        />
        <FilteredNews
          year={selectedYear}
          month={selectedMonth}
        />
      </Suspense>
    </>
  )
}
