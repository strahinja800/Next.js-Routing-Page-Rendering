import { getNewsItem } from '@/lib/news'
import { notFound } from 'next/navigation'

export default async function ImagePage({ params }) {
  const imageSlug =  params.slug
  const newsItem = await getNewsItem(imageSlug)

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
