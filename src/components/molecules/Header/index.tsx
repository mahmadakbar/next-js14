import ChartMenu from '@components/atoms/ChartMenu'
import Whistlist from '@components/atoms/Whistlist'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="w-full border flex justify-between px-5 py-2 items-center shadow-card">
      <Link href="/">
        <h1 className="text-xl font-bold italic">ShoppingTest</h1>
      </Link>

      <div className="flex gap-7 items-center">
        <Whistlist />
        <ChartMenu />
      </div>
    </header>
  )
}
