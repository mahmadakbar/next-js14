import IconWishList from '@assets/icon/IconWishList'

export default function Whistlist() {
  return (
    <div className="relative">
      <IconWishList className="w-8 h-8" />
      <div className="bg-green-600 rounded-full flex items-center justify-center text-xs w-5 h-5 absolute -bottom-0 -left-1 text-white">
        <span>0</span>
      </div>
    </div>
  )
}
