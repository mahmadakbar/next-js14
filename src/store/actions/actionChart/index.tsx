import { ProductList } from '@interfaces'

export function setDataChart(data: ProductList[]) {
  return {
    type: '@APP/ADDCHART',
    payload: data,
  }
}
