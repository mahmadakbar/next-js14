import CartMenu from '@components/atoms/CartMenu'
import Whistlist from '@components/atoms/Whistlist'

export default function Header() {
  return (
    <header className="w-full border flex justify-between px-5 py-2 items-center shadow-card">
      <h1 className="text-xl font-bold italic">ShoppingTest</h1>

      <div className="flex gap-7 items-center">
        <Whistlist />
        <CartMenu />
      </div>
    </header>
  )
}
