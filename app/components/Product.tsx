import ProductButton from "./ProductButton";

export default function Product({
  id,
  title,
  price,
  description,
  isButtonVisible,
}: {
  id: number;
  title: string;
  price: number;
  description: string;
  isButtonVisible: boolean;
}) {
  return (
    <div>
      <h2>{title}</h2>
      {isButtonVisible ? null : (
        <>
          <p>{price}</p>
          <p>{description}</p>
        </>
      )}
      {isButtonVisible ? <ProductButton id={id} /> : null}
    </div>
  );
}
