import { ProductList } from '@interfaces'
import { formatNumber } from '@utils/helper'
import React from 'react'

type Props = {
  chart: ProductList[]
}

export default function CardBill({ chart }: Readonly<Props>) {
  const totalBill = chart.reduce((acc, item) => acc + (item.total as number), 0)

  return (
    <div className="shadow-card rounded-lg overflow-hidden relative p-5 w-full h-fit mt-2">
      <table className="w-full border-b-2 border-slate-800">
        <tr className="grid grid-cols-3 text-left text-sm py-2">
          <th>Item</th>
          <th className="text-center">Amount</th>
          <th className="text-right">Total</th>
        </tr>
        {chart.map(item => (
          <tr key={item.id} className="grid grid-cols-3 text-left text-sm py-1">
            <td className="truncate">{item.name}</td>
            <td className="text-center">x{item.quantity}</td>
            <td className="text-right">Rp.{formatNumber(item.total as number)}</td>
          </tr>
        ))}
      </table>
      <div className="text-sm my-1 font-bold flex justify-between">
        <p>Total</p>
        <p className="text-right">Rp.{formatNumber(totalBill)}</p>
      </div>

      <button className="bg-green-600 p-2 w-full text-white mt-7">Checkout</button>
    </div>
  )
}
