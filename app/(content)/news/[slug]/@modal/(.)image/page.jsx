'use client'

import { DUMMY_NEWS } from '@/dummy_news'
import { notFound, useRouter } from 'next/navigation'

export default function InterceptedImagePage({ params }) {
  const router = useRouter()

  const imageSlug = params.slug
  const newsItem = DUMMY_NEWS.find(item => item.slug === imageSlug)

  if (!newsItem) {
    notFound() // This will trigger the not-found page for this route
  }

  return (
    <>
      <div
        className='modal-backdrop'
        onClick={router.back}
      />
      <dialog
        className='modal'
        open
      >
        <div className='fullscreen-image'>
          <img
            src={`/images/news/${newsItem.image}`}
            alt={newsItem.title}
          />
        </div>
      </dialog>
    </>
  )
}
