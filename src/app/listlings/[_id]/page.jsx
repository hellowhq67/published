import ProductDetail from "@/components/product details/ProductDetail";


export default function page({ params: { _id} }) {
  return (
    <div>

      <ProductDetail productId={_id}/>
    </div>
  )
}
