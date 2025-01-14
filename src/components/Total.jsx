export default function Total({ shoppingListItems, className, children }) {
  const total = shoppingListItems.reduce((a, b) => (a = a + b.price), 0);

  return (
    <span className={className}>
      {children}
      {total > 0 && <span className='price'>$ {total}</span>}
    </span>
  );
}
