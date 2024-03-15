'use client'

import CardBill from '@components/atoms/CardBill'
import ChartContent from '@components/atoms/ChartContent'
import { ReduxCart } from '@interfaces'
import { useSelector } from 'react-redux'

export default function ListChart() {
  const dataChart = useSelector((state: ReduxCart) => state.dataChart)
  const chart = dataChart.dataChart
  return (
    <div className="p-5 h-[90vh] overflow-scroll w-screen">
      {chart.length > 0 ? (
        <div className="flex flex-row">
          <div className="w-2/3">
            {chart.map((item, index) => (
              <ChartContent key={item.id} index={index} chart={chart} {...item} />
            ))}
          </div>
          <div className="ml-5 w-1/3">
            <CardBill chart={chart} />
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center text-4xl h-[90vh]">
          <h1>Your Chart is Empty</h1>
        </div>
      )}
    </div>
  )
}
