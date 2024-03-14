'use client'

import IconCart from '@assets/icon/IconCart'
import { ReduxCart } from '@interfaces'
import { useSelector } from 'react-redux'

export default function CartMenu() {
  const dataChart = useSelector((state: ReduxCart) => state.dataChart)
  return (
    <div className="relative">
      <IconCart className="w-8 h-8" />
      {dataChart.dataChart.length > 0 && (
        <div className="bg-green-600 rounded-full flex items-center justify-center text-xs w-5 h-5 absolute -bottom-0 -left-1 text-white">
          <span>{dataChart.dataChart.length}</span>
        </div>
      )}
    </div>
  )
}
