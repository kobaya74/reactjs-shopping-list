import { useState } from 'react';
import Button from './Button';

export default function FormAddNewItem({ onAddItem }) {
  const initialFormData = {
    name: '',
    price: '',
    image: 'https://picsum.photos/48/48',
  };
  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);

    if (
      !formData.get('name') ||
      !formData.get('price') ||
      !formData.get('image')
    )
      return;

    if (isNaN(formData.get('price'))) {
      alert('The price field has to be a number!');
      setFormData({
        name: formData.get('name'),
        price: '',
        image: formData.get('image'),
      });
      return;
    }

    const randomImageNumber = Math.floor(Math.random() * 100);
    const newItem = {
      id: crypto.randomUUID(),
      name: formData.get('name'),
      price: Number(formData.get('price')),
      image: formData.get('image'),
    };

    onAddItem(newItem);

    setFormData({
      name: '',
      price: '',
      image: `https://picsum.photos/id/${randomImageNumber}/48`,
    });
  }

  return (
    <form className='form-add-item' onSubmit={handleSubmit}>
      <label>Name</label>
      <input
        type='text'
        name='name'
        value={formData.name}
        onChange={handleChange}
        placeholder='Add item name'
      />

      <label>Price</label>
      <input
        type='text'
        name='price'
        value={formData.price}
        onChange={handleChange}
        placeholder='Item price e.g. 5'
      />

      <label>Image URL</label>
      <input
        type='text'
        name='image'
        value={formData.image}
        onChange={handleChange}
      />

      <Button className='button button-primary'>Add</Button>
    </form>
  );
}
