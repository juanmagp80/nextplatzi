const getProducts = async () => {
  const response = await fetch(
    `${process.env.SHOPIFY_HOSTNAME}/admin/api/2023-10/products.json`,
    {
      headers: new Headers({
        "X-Shopify-Access-Token": process.env.SHOPIFY_API_KEY || "",
      }),
    }
  );
  const data = await response.json();
  return data;
};

export const MainProducts = async () => {
  console.log(process.env.NEXT_PUBLIC_SHOPIFY_HOSTNAME);
  return (
    <main>
      <h1>MainProducts</h1>
    </main>
  );
};
