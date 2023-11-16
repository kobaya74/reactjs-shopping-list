import Total from './Total';
import TotalCart from './TotalCart';

export default function Summary({ shoppingListItems }) {
  const numItems = shoppingListItems.length;
  const numChecked = shoppingListItems.filter((item) => item.checked).length;

  return (
    <div className='summary'>
      <h2>Summary</h2>
      <p>
        Items on the shopping list:
        <span>
          <b>{numItems > 0 && numItems}</b>
        </span>
      </p>
      <p>
        Items added to cart:
        <span>
          <b>{numChecked > 0 ? numChecked : ''}</b>
        </span>
      </p>
      <p>
        <Total shoppingListItems={shoppingListItems}>
          Total for items on the list:
        </Total>
      </p>
      <p>
        <TotalCart shoppingListItems={shoppingListItems}>
          Total for items in the cart:
        </TotalCart>
      </p>
    </div>
  );
}
