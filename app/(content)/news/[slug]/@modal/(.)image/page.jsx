import { ModalBackdrop } from '@/components/modal_backdrop'
import { getNewsItem } from '@/lib/news'
import { notFound } from 'next/navigation'

export default async function InterceptedImagePage({ params }) {
  const imageSlug = await params.slug
  const newsItem = await getNewsItem(imageSlug)

  if (!newsItem) {
    notFound() // This will trigger the not-found page for this route
  }

  return (
    <>
      <ModalBackdrop />
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
