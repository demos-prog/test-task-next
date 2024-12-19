import data from "../data.json";
import Product from "../components/Product";

export default function Products() {
  return (
    <>
      <h1>Products</h1>
      {data.products.map(({ id, name, price, description }) => (
        <div key={id}>
          <Product
            key={id}
            id={id}
            title={name}
            price={price}
            description={description}
            isButtonVisible={true}
          />
        </div>
      ))}
    </>
  );
}
