import Image from 'next/image'
import { formatNumber } from '../../../utils/helper'
import Link from 'next/link'
import { ProductItem } from '@interfaces'

export default function CardProduct({ id, image, name, price, discount }: Readonly<ProductItem>) {
  const discountPrice = Math.round(Math.abs(((discount - price) / price) * 100))
  return (
    <Link href={`/product/${id}`} className="shadow-card rounded-lg overflow-hidden relative">
      <div className="bg-slate-300 relative">
        {discount > 0 && (
          <div className="w-10 h-10 rounded-full bg-red-700 justify-center items-center flex text-white text-xs absolute -top-2 -left-2">
            <p className="ml-2 mt-1">{discountPrice}%</p>
          </div>
        )}
        <Image src={image} alt={name} width={90} height={90} className="w-full" />
      </div>
      <div className="p-5">
        <h1 className="font-bold text-xl truncate">{name}</h1>
        <div className="flex mt-2">
          <p className="text-lg font-semibold">Rp.{formatNumber(discount || price)},00</p>
          {discount > 0 && <p className="text-slate-500 text-xs line-through ml-2">Rp.{formatNumber(price)},00</p>}
        </div>
      </div>
      <div className="hover-card"></div>
    </Link>
  )
}
