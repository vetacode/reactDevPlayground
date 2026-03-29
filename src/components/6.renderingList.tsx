const products = [
  { title: 'Cabbage', isFruit: false, id: 1 },
  { title: 'Garlic', isFruit: false, id: 2 },
  { title: 'Apple', isFruit: true, id: 3 },
];

export default function ShoppingLists() {
  const ListItems = products.map((product) => (
    <li
      key={product.id}
      style={{ color: product.isFruit ? 'magenta' : 'darkgreen' }}
      className='uppercase text-2xl font-extrabold'
    >
      {product.title}
    </li>
  ));

  // Usually, a key should be coming from your data, such as a database ID. React uses your keys to know what happened if you later insert, delete, or reorder the items.

  return <ul>{ListItems}</ul>;
}
