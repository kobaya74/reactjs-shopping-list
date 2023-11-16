import { useState } from 'react';
import Button from './Button';

export default function FormAddNewItem({ onAddItem }) {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('https://picsum.photos/seed/picsum/48');

  function handleSubmit(e) {
    e.preventDefault();

    if (!name || !image || !price) return;

    const id = crypto.randomUUID();
    const newItem = {
      id,
      name,
      price,
      image: `${image}?=${id}`,
    };

    onAddItem(newItem);
    setName('');
    setPrice('');
    setImage('https://picsum.photos/seed/picsum/48');
  }

  return (
    <form className='form-add-item' onSubmit={handleSubmit}>
      <label>Name</label>
      <input
        type='text'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label>Price</label>
      <input
        type='text'
        value={price}
        onChange={(e) => setPrice(Number(e.target.value))}
      />

      <label>Image URL</label>
      <input
        type='text'
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />

      <Button className='button'>Add</Button>
    </form>
  );
}
