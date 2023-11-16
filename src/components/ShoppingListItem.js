import Button from './Button';

export default function ShoppingListItem({ item, onDeleteItem, onToggleItem }) {
  return (
    <li className={`item ${item.checked ? 'checked' : ''}`}>
      <img src={item.image} alt={item.name} />
      <span className='item__data'>
        <span className='item-data__name'>{item.name}</span>
        <span className='item-data__price'>
          <label>Price: </label>
          {item.price}$
        </span>
      </span>
      <span className='item-data__action'>
        <input
          type='checkbox'
          value={item.checked}
          onChange={() => onToggleItem(item.id)}
        />
        <Button className={'button'} onClick={() => onDeleteItem(item.id)}>
          ❌
        </Button>
      </span>
      {item.checked && <span className='item-checked'>Added to cart</span>}
    </li>
  );
}
