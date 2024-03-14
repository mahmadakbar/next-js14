export interface ProductItem {
  id: string
  image: string
  name: string
  price: number
  discount: number
  size: string[] | number[]
  desc: () => JSX.Element
}

export interface ProductList {
  id: string
  image: string
  name: string
  price: number
  discount: number
  size: string[] | number[]
  quantity?: number
  whistlist?: boolean
  total?: number
}

export interface ReduxCart {
  dataChart: {
    dataChart: ProductList[]
  }
}
