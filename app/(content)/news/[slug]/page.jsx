import { DUMMY_NEWS } from '@/dummy_news'
import Link from 'next/link'
import { notFound } from 'next/navigation'

export default async function NewsDetailPage({ params }) {
  const newsSlug = (await params).slug
  const newsItem = DUMMY_NEWS.find(item => item.slug === newsSlug)

  if (!newsItem) {
    notFound() // This will trigger the not-found page for this route
  }

  return (
    <article className='news-article'>
      <header>
        <Link href={`/news/${newsItem.slug}/image`}>
          <img
            src={`/images/news/${newsItem.image}`}
            alt={newsItem.title}
          />
        </Link>
        <h1>{newsItem.title}</h1>
        <time dateTime={newsItem.date}>{newsItem.date}</time>
      </header>
      <p>{newsItem.content}</p>
    </article>
  )
}
