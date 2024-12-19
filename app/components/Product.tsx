import ProductButton from "./ProductButton";
import { ProductProps } from "../types";

export default function Product({
  id,
  title,
  price,
  description,
  isButtonVisible,
}: ProductProps) {
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
