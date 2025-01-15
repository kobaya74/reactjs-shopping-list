import { useState } from 'react';
import Button from './Button';

export default function FormAddNewItem({ onAddItem }) {
  const initialFormData = {
    name: '',
    price: '',
    image: 'https://picsum.photos/48/48',
  };
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({
    name: false,
    priceEmpty: false,
    priceNaN: false,
    image: false,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const errorMessageRequired = 'This is a required field';

  function handleSubmit(e) {
    e.preventDefault();

    const newErrors = {
      name: !formData.name,
      priceEmpty: !formData.price, // True if price is empty
      priceNaN: formData.price && isNaN(formData.price), // True if price is not a number
      image: !formData.image,
    };

    setErrors(newErrors);

    // If there are any errors, stop form submission
    if (
      newErrors.name ||
      newErrors.priceEmpty ||
      newErrors.priceNaN ||
      newErrors.image
    ) {
      return;
    }

    const randomImageNumber = Math.floor(Math.random() * 100);
    const newItem = {
      id: crypto.randomUUID(),
      name: formData.name,
      price: Number(formData.price),
      image: formData.image,
    };

    onAddItem(newItem);

    setFormData({
      name: '',
      price: '',
      image: `https://picsum.photos/id/${randomImageNumber}/48`,
    });
    setErrors({
      name: false,
      priceEmpty: false,
      priceNaN: false,
      image: false,
    });
  }

  return (
    <form className='form-add-item' onSubmit={handleSubmit}>
      <fieldset className='fieldset'>
        <div className='field'>
          <label>Name</label>
          <input
            type='text'
            name='name'
            value={formData.name}
            onChange={handleChange}
            placeholder='Add item name'
          />
          {errors.name && <span className='error'>{errorMessageRequired}</span>}
        </div>

        <div className='field'>
          <label>Price</label>
          <input
            type='text'
            name='price'
            value={formData.price}
            onChange={handleChange}
            placeholder='Item price e.g. 5'
          />
          {(errors.priceEmpty || errors.priceNaN) && (
            <span className='error'>
              {errors.priceEmpty
                ? errorMessageRequired
                : 'A numeric value required'}
            </span>
          )}
        </div>

        <div className='field'>
          <label>Image URL</label>
          <input
            type='text'
            name='image'
            value={formData.image}
            onChange={handleChange}
            placeholder='URL to image'
          />
          {errors.image && (
            <span className='error'>{errorMessageRequired}</span>
          )}
        </div>
      </fieldset>
      <div className='actions'>
        <Button className='button button-primary'>Add</Button>
      </div>
    </form>
  );
}
