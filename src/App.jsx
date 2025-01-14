import { useState } from 'react';
import './variables.css';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import ShoppingListData from './components/ShoppingListData';
import Main from './components/Main';

export default function App() {
  const [shoppingListItems, setShoppingListItems] = useState(ShoppingListData);
  const [showAddItem, setShowAddItem] = useState(false);

  return (
    <div className='page-wrapper'>
      <Header className={'header'} />
      <Main
        shoppingListItems={shoppingListItems}
        setShoppingListItems={setShoppingListItems}
        showAddItem={showAddItem}
        setShowAddItem={setShowAddItem}
      />
      <Footer className={'footer'} />
    </div>
  );
}
