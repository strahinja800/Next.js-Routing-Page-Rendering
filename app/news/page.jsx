import { DUMMY_NEWS } from '@/dummy_news'
import NewsList from '@/components/news_list'

export default function NewsPage() {
  return (
    <>
      <h1>News Page</h1>
      <NewsList news={DUMMY_NEWS} />
    </>
  )
}
