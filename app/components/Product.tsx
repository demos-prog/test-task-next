import ProductButton from "./ProductButton";

export default function Product({
  id,
  title,
  price,
  description,
}: {
  id: number;
  title: string;
  price: number;
  description: string;
}) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{price}</p>
      <p>{description}</p>
      <ProductButton title={title} id={id} />
    </div>
  );
}
