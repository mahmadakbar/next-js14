import CardProduct from '@components/atoms/CardProduct'
import PRODUCT from '@utils/dummy'

export default function ListProduct() {
  return (
    <div className="p-5 grid grid-cols-4 gap-5">
      {PRODUCT.map((item: any) => (
        <CardProduct key={item.id} {...item} />
      ))}
    </div>
  )
}
