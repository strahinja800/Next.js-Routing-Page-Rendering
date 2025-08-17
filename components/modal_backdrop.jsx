'use client'

import { useRouter } from 'next/navigation'

export function ModalBackdrop() {
  const router = useRouter()

  return (
    <div
      className='modal-backdrop'
      onClick={router.back}
    />
  )
}
