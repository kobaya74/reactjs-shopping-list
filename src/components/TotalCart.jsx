export default function TotalCart({ shoppingListItems, className, children }) {
  const total = shoppingListItems
    .filter((item) => item.checked)
    .reduce((a, b) => (a = a + b.price), 0);

  return (
    <span className={className}>
      {children}
      {total > 0 && <span className='price'>$ {total}</span>}
    </span>
  );
}
