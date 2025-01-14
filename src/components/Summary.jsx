import Total from './Total';
import TotalCart from './TotalCart';

export default function Summary({ shoppingListItems }) {
  const numItems = shoppingListItems.length;
  const numChecked = shoppingListItems.filter((item) => item.checked).length;

  return (
    <div className='summary'>
      <h2 className='summary-title'>Summary</h2>
      <div className='summary-item'>
        <span className='label'>Items on the shopping list:</span>
        <span>
          <b>{numItems > 0 && numItems}</b>
        </span>
      </div>
      <div className='summary-item'>
        <span className='label'>Items added to cart:</span>
        <span>
          <b>{numChecked > 0 ? numChecked : ''}</b>
        </span>
      </div>
      <div className='summary-item'>
        <Total shoppingListItems={shoppingListItems} className={'subtotal'}>
          <span className='label'>Total for items on the list:</span>
        </Total>
      </div>
      <div className='summary-item'>
        <TotalCart shoppingListItems={shoppingListItems} className={'total'}>
          <span className='label'>Total for items in the cart:</span>
        </TotalCart>
      </div>
    </div>
  );
}
