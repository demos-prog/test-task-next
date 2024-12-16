import Product from "@/app/components/Product";
import data from "../../data.json";

interface ProductParams {
  params: {
    id: string;
  };
}

export const revalidate = 3600;

export default async function ProductPage({ params }: ProductParams) {
  const awParams = await params;
  const product = data.products.find((p) => `${p.id}` === awParams.id);

  return (
    <div>
      {product ? (
        <Product
          id={0}
          title={product.name}
          price={product.price}
          description={product.description}
        />
      ) : (
        <p>Product not found</p>
      )}
    </div>
  );
}

export async function generateStaticParams() {
  const products = data.products;

  return products.map((product) => ({
    id: product.id.toString(),
  }));
}
