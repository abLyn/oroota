'use client'

import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'
import { useDebounce } from 'use-debounce'

const Search = () => {
  const [input, setInput] = useState('')
  const router = useRouter()

  const [query] = useDebounce(input, 100)

  useEffect(() => {
    if (!query || query === '') {
      router.push(`/patients`)
    } else {
      router.push(`/patients?query=${query}`)
    }
  }, [query, router])

  return (
    <>
      <input
        type="text"
        placeholder="Type here"
        className="input input-bordered w-full max-w-xs"
        onChange={(e) => setInput(e.target.value)}
      />
    </>
  )
}

export default Search
