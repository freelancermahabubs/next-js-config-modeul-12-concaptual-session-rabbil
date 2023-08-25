async function getData() {
  const res = await fetch("https://dummyjson.com/products");
  return res.json();
}
const Page = async () => {
  const data = await getData();

  return (
    <div>
      {JSON.stringify(data)}

      <h1>Product Page</h1>
    </div>
  );
};

export default Page;
