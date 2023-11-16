import Button from './Button';

export default function Action({
  shoppingListItems,
  onReset,
  onShowAddItem,
  showAddItem,
}) {
  return (
    <div className='action'>
      {shoppingListItems.length > 0 && (
        <Button className='button' onClick={onReset}>
          <span>Reset list</span>
        </Button>
      )}
      <Button className='button add-to-cart' onClick={onShowAddItem}>
        <span>{!showAddItem ? 'Add new item' : 'Close form'}</span>
      </Button>
    </div>
  );
}
