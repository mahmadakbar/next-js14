'use client'

import { ProductList, ReduxCart } from '@interfaces'
import { setDataChart } from '@store/actions/actionChart'
import { formatNumber } from '@utils/helper'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function CardAdd({ data }: { data: ProductList }) {
  const dispatch = useDispatch()
  const dataChart = useSelector((state: ReduxCart) => state.dataChart)
  const [quantity, setQuantity] = useState(1)

  const price = data.discount || data.price

  const submitToCart = () => {
    // TODO
    const payload = {
      ...data,
      quantity,
      total: price * quantity,
    }

    const chartt = [...dataChart.dataChart]
    const findIndx = chartt.findIndex(item => item.id === data.id)

    if (findIndx > -1) {
      chartt[findIndx] = payload
    } else {
      chartt.push(payload)
    }

    dispatch(setDataChart(chartt))
  }

  const checkCart = () => {
    const chartt = dataChart.dataChart
    const findIndx = chartt.findIndex(item => item.id === data.id)
    console.log(chartt[findIndx])
    console.log(dataChart.dataChart)
  }

  return (
    <div className="shadow-card rounded-lg overflow-hidden relative p-5 w-full h-fit">
      <div className="flex justify-center gap-2 items-center border">
        <button className="bg-slate-400 p-2 flex-1" onClick={() => quantity > 1 && setQuantity(quantity - 1)}>
          -
        </button>
        <p className="text-sm flex-1 text-center">{quantity}</p>
        <button className="bg-slate-400 p-2 flex-1" onClick={() => setQuantity(quantity + 1)}>
          +
        </button>
      </div>
      <p className="text-sm">Subtotal: Rp. {formatNumber(price * quantity)}</p>

      <button className="bg-green-600 p-2 w-full mt-2" onClick={submitToCart}>
        Add to Cart
      </button>
      <button className="bg-red-600 p-2 w-full mt-2 text-white" onClick={checkCart}>
        Add to Wishlist
      </button>
    </div>
  )
}
