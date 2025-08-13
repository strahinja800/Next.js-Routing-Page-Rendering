'use client'

export default function FilterErrorPage({error}) {
  return (
    <div id='error'>
      <h1>Error!</h1>
      <p>{error.message}</p>
    </div>
  )
}
