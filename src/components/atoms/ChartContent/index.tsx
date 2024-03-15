import Image from 'next/image'
import { formatNumber } from '../../../utils/helper'
import { ProductList } from '@interfaces'
import { useDispatch } from 'react-redux'
import { setDataChart } from '@store/actions/actionChart'

type Props = {
  index: number
  chart: ProductList[]
} & ProductList

export default function ChartContent({ index, chart, image, name, price, discount, quantity }: Readonly<Props>) {
  const dispatch = useDispatch()
  const quznt = quantity || 1
  const discountPrice = Math.round(Math.abs(((discount - price) / price) * 100))

  const setQuantity = (qq: number) => {
    const chartt = [...chart]
    const payload = {
      ...chartt[index],
      quantity: qq,
      total: price * qq,
    }

    chartt[index] = payload
    dispatch(setDataChart(chartt))
  }

  const removeList = () => {
    const chartt = [...chart]
    chartt.splice(index, 1)
    dispatch(setDataChart(chartt))
  }

  return (
    <div className="shadow-card rounded-lg overflow-hidden relative flex md:flex-row flex-col mt-2">
      <div className="bg-slate-300 relative">
        {discount > 0 && (
          <div className="w-10 h-10 rounded-full bg-red-700 justify-center items-center flex text-white text-xs absolute -top-2 -left-2">
            <p className="ml-2 mt-1">{discountPrice}%</p>
          </div>
        )}
        <Image src={image} alt={name} width={150} height={150} className="w-full" />
      </div>
      <div className="p-5 flex flex-col justify-between">
        <h1 className="font-bold text-3xl">{name}</h1>
        <div className="flex mt-2">
          <p className="text-lg font-semibold">Rp.{formatNumber(discount || price)},00</p>
          {discount > 0 && <p className="text-slate-500 text-xs line-through ml-2">Rp.{formatNumber(price)},00</p>}
        </div>
        <div className="flex justify-center gap-2 items-center border">
          <button className="bg-slate-400 p-2 flex-1" onClick={() => quznt > 1 && setQuantity(quznt - 1)}>
            -
          </button>
          <p className="text-sm flex-1 text-center">{quznt}</p>
          <button className="bg-slate-400 p-2 flex-1" onClick={() => setQuantity(quznt + 1)}>
            +
          </button>
        </div>
        <div className="grid grid-cols-2 gap-2 bottom-0">
          <button className="bg-gray-950 p-2 w-full mt-2 text-white" onClick={removeList}>
            Remove item
          </button>
          <button className="bg-red-600 p-2 w-full mt-2 text-white">Add to Wishlist</button>
        </div>
      </div>
    </div>
  )
}
