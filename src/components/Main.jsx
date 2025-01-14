import ShoppingList from './ShoppingList';
import FormAddNewItem from './FormAddNewItem';
import Summary from './Summary';
import Action from './Actions';
import ShoppingListItem from './ShoppingListItem';
import Total from './Total';

export default function Main({
  shoppingListItems,
  setShoppingListItems,
  showAddItem,
  setShowAddItem,
}) {
  function handleAddItem(shoppingListItem) {
    setShoppingListItems((shoppingListItems) => [
      ...shoppingListItems,
      shoppingListItem,
    ]);
  }

  function handleShowAddItem() {
    setShowAddItem((show) => !show);
  }

  function handleDeleteItem(id) {
    setShoppingListItems((shoppingListItems) =>
      shoppingListItems.filter((item) => item.id !== id)
    );
  }

  function handleToggleItem(id) {
    setShoppingListItems((shoppingListItems) =>
      shoppingListItems.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  }

  function handleReset() {
    const confirm = window.confirm(
      'Are you sure you want to remove all items?'
    );

    if (confirm) {
      setShoppingListItems([]);
      setShowAddItem(false);
    }
  }

  return (
    <div className='main'>
      {shoppingListItems.length > 0 && (
        <section className='main__content'>
          <ShoppingList shoppingListItems={shoppingListItems}>
            <ul className='item-list'>
              {shoppingListItems.map((item, index) => (
                <ShoppingListItem
                  item={item}
                  key={item.id}
                  onDeleteItem={handleDeleteItem}
                  onToggleItem={handleToggleItem}
                  index={index}
                />
              ))}
            </ul>
            <b>
              {shoppingListItems.length > 0 && (
                <Total
                  shoppingListItems={shoppingListItems}
                  className={'total'}
                >
                  <label>Total: </label>
                </Total>
              )}
            </b>
          </ShoppingList>
          <Action
            onReset={handleReset}
            onShowAddItem={handleShowAddItem}
            showAddItem={showAddItem}
            shoppingListItems={shoppingListItems}
          />
        </section>
      )}
      <div className='sidebar'>
        {showAddItem && <FormAddNewItem onAddItem={handleAddItem} />}
        <Summary shoppingListItems={shoppingListItems} />
        <Action
          onReset={handleReset}
          onShowAddItem={handleShowAddItem}
          showAddItem={showAddItem}
          shoppingListItems={shoppingListItems}
        />
      </div>
    </div>
  );
}
