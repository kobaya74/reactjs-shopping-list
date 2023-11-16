import Total from './Total';
import ShoppingListItem from './ShoppingListItem';

export default function ShoppingList({
  shoppingListItems,
  onDeleteItem,
  onToggleItem,
}) {
  return (
    <>
      <ul className='item-list'>
        {shoppingListItems.map((item) => (
          <ShoppingListItem
            item={item}
            key={item.id}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
          />
        ))}
      </ul>
      <b>
        {shoppingListItems.length > 0 && (
          <Total shoppingListItems={shoppingListItems}>
            <label>Total: </label>
          </Total>
        )}
      </b>
    </>
  );
}
