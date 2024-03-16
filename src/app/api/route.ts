import { getProducts } from "app/services/shopify";

getProducts();

export async function GET() {
  const products = await getProducts();
  console.log(products);
  return Response.json({ products });
  const message = "Hello world";
  return Response.json({ message });
}
