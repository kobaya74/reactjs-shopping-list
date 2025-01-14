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
        <label className="label visually-hidden">Check item to add to cart</label>
        <input
          type='checkbox'
          value={item.checked}
          onChange={() => onToggleItem(item.id)}
        />
        <Button className={'button button-remove'} onClick={() => onDeleteItem(item.id)}>
          <span className="icon">+</span>
        </Button>
      </span>
      {item.checked && <span className='item-checked'>Added to cart</span>}
    </li>
  );
}
