import { DUMMY_NEWS } from '@/dummy_news'
import Link from 'next/link'
import { notFound } from 'next/navigation'

export default function ImagePage({ params }) {
  const imageSlug = params.slug
  const newsItem = DUMMY_NEWS.find(item => item.slug === imageSlug)

  if (!newsItem) {
    notFound() // This will trigger the not-found page for this route
  }

  return (
    <div className='fullscreen-image'>
      <img
        src={`/images/news/${newsItem.image}`}
        alt={newsItem.title}
      />
    </div>
  )
}
