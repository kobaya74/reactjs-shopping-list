import '../App.css';
import { useState } from 'react';
import ShoppingList from './ShoppingList';
import FormAddNewItem from './FormAddNewItem';
import Summary from './Summary';
import ShoppingListData from './shoppingListData';
import Action from './Action';
import ShoppingListItem from './ShoppingListItem';
import Total from './Total';

export default function App() {
  const [shoppingListItems, setShoppingListItems] = useState(ShoppingListData);
  const [showAddItem, setShowAddItem] = useState(false);

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
    <div className='App'>
      <header className='App-header'>
        <h1>Shopping list</h1>
      </header>
      <div className='main'>
        {shoppingListItems.length > 0 && (
          <section className='main__content'>
            <ShoppingList shoppingListItems={shoppingListItems}>
              <ul className='item-list'>
                {shoppingListItems.map((item) => (
                  <ShoppingListItem
                    item={item}
                    key={item.id}
                    onDeleteItem={handleDeleteItem}
                    onToggleItem={handleToggleItem}
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
    </div>
  );
}
