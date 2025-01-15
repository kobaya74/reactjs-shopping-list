import Button from './Button';

export default function Action({
  shoppingListItems,
  onReset,
  onShowAddItem,
  showAddItem,
}) {
  return (
    <div className='actions'>
      {shoppingListItems.length > 0 && (
        <Button className='button button-primary' onClick={onReset}>
          <span>Reset list</span>
        </Button>
      )}
      <Button
        className={`button add-to-cart ${
          !showAddItem ? 'button-primary' : 'button-secondary'
        }`}
        onClick={onShowAddItem}
      >
        <span>{!showAddItem ? 'Add new item' : 'Close form'}</span>
      </Button>
    </div>
  );
}
