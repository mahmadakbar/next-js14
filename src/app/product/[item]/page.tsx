import CardAdd from '@components/atoms/CardAdd'
import CardItem from '@components/atoms/CardItem'
import { ProductItem } from '@interfaces'
import PRODUCT from '@utils/dummy'
type ItemType = {
  params: { item: string }
}

export function generateMetadata({ params: { item } }: ItemType) {
  const dataItem = PRODUCT.find(product => product.id === item) as ProductItem
  return {
    title: dataItem.name,
  }
}

export default function Product({ params: { item } }: Readonly<{ params: { item: string } }>) {
  const dataItem = PRODUCT.find(product => product.id === item) as ProductItem
  const dataOnly = { ...dataItem } as any
  delete dataOnly.desc

  return (
    <div className="px-5 pt-5 h-[90vh] overflow-scroll flex flex-row">
      <div>
        <CardItem {...dataItem} />
      </div>
      <div className="ml-5 flex w-2/3 h-full">
        <CardAdd data={dataOnly} />
      </div>
    </div>
  )
}
