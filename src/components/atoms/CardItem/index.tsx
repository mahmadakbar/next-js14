import Image from 'next/image'
import { formatNumber } from '../../../utils/helper'
import { ProductItem } from '@interfaces'

export default function CardItem({ image, name, price, discount, desc }: Readonly<ProductItem>) {
  const Details: React.FC<React.HTMLAttributes<HTMLDivElement>> = desc
  const discountPrice = Math.round(Math.abs(((discount - price) / price) * 100))
  return (
    <div className="shadow-card rounded-lg overflow-hidden relative flex md:flex-row flex-col">
      <div className="bg-slate-300 relative">
        {discount > 0 && (
          <div className="w-10 h-10 rounded-full bg-red-700 justify-center items-center flex text-white text-xs absolute -top-2 -left-2">
            <p className="ml-2 mt-1">{discountPrice}%</p>
          </div>
        )}
        <Image src={image} alt={name} width={300} height={300} className="w-full" />
      </div>
      <div className="p-5">
        <h1 className="font-bold text-3xl">{name}</h1>
        <div className="flex mt-2">
          <p className="text-lg font-semibold">Rp.{formatNumber(discount || price)},00</p>
          {discount > 0 && <p className="text-slate-500 text-xs line-through ml-2">Rp.{formatNumber(price)},00</p>}
        </div>

        <Details className="mt-4 text-sm border-t pt-4 border-slate-400" />
      </div>
    </div>
  )
}
