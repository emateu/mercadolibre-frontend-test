'use client'
import { useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'

export function SearchForm() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [search, setSearch] = useState(searchParams.get('search') || '')
  const params = new URLSearchParams({
    search: search,
  })

  return (
    <form
      method="GET"
      action="/items"
      onSubmit={(e) => {
        e.preventDefault()
        router.push(`/items?${params.toString()}`)
      }}
    >
      <label htmlFor="search" className="text-sm text-gray-900 sr-only">
        Buscar
      </label>
      <div className="flex w-full relative">
        <input
          className="h-10 bg-white shadow px-3 pr-10 w-full rounded-sm focus-style no-clear-button text-md"
          type="search"
          name="search"
          value={search}
          placeholder="Buscar productos, marcas y más..."
          onChange={(e) => setSearch(e.target.value)}
        />

        <button
          type="submit"
          className="flex justify-center items-center rounded-sm absolute bg-gray-100 top-0 right-0 h-10 w-10 focus-style"
          aria-label="Buscar"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </button>
      </div>
    </form>
  )
}
