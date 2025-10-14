import { useState, useEffect } from 'react';
import './BasketPage.css';

const AzovLogo = '/Azov.svg';
const SearchIcon = '/search.svg';
const HeartIcon = '/heart.svg';
const ProfileIcon = '/profile.svg';
const DeliverIcon = '/deliver.svg';
const WalletIcon = '/wallet.svg';
const TrashIcon = '/trash.svg';
const LinkIcon = '/link.svg';
const StickersImage = '/3d-stickers.svg';
const EyelashesImage = '/eyelashes.svg';
const ViosImage = '/VIOS.svg';
const SoyImage = '/SOY.svg';

interface CartItem {
  id: number;
  name: string;
  description: string;
  price: number;
  quantity: number;
  image: string;
  delivery: string;
  return: string;
  position: 'left' | 'right';
  selected: boolean;
}

function BasketPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: "3D стикеры. Объемные наклейки на телефон",
      description: "",
      price: 238,
      quantity: 1,
      image: StickersImage,
      delivery: "Доставим завтра",
      return: "Бесплатный отказ",
      position: 'left',
      selected: false
    },
    {
      id: 2,
      name: "Набор многоразовые накладные ресницы пучки С 160 шт Азия Черный",
      description: "",
      price: 345,
      quantity: 1,
      image: EyelashesImage,
      delivery: "Доставим послезавтра",
      return: "Бесплатный отказ",
      position: 'left',
      selected: false
    },
    {
      id: 3,
      name: "VOIS - Маска для здоровья волос 350 мл",
      description: "",
      price: 527,
      quantity: 1,
      image: ViosImage,
      delivery: "Доставим завтра",
      return: "Бесплатный отказ",
      position: 'right',
      selected: false
    },
    {
      id: 4,
      name: "Dr.Health - Протеин соевый изолят протеиновый коктейль без сахара",
      description: "",
      price: 501,
      quantity: 1,
      image: SoyImage,
      delivery: "Доставим через 3 дня",
      return: "Бесплатный отказ",
      position: 'right',
      selected: false
    }
  ]);

  const [selectAll, setSelectAll] = useState(false);

  useEffect(() => {
    const allSelected = cartItems.every(item => item.selected);
    const someSelected = cartItems.some(item => item.selected);
    
    if (allSelected) {
      setSelectAll(true);
    } else if (someSelected) {
      setSelectAll(false);
    }
  }, [cartItems]);

  const handleSelectAll = (checked: boolean) => {
    setSelectAll(checked);
    setCartItems(prevItems => 
      prevItems.map(item => ({ ...item, selected: checked }))
    );
  };

  const toggleItemSelection = (id: number) => {
    setCartItems(prevItems => 
      prevItems.map(item => 
        item.id === id ? { ...item, selected: !item.selected } : item
      )
    );
  };

  const updateQuantity = (id: number, change: number) => {
    setCartItems(prevItems => 
      prevItems.map(item => 
        item.id === id 
          ? { ...item, quantity: Math.max(1, item.quantity + change) } 
          : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  const totalPrice = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div className="app">
      <header className="header">
        <div className="header-content">
          <div className="header-left">
            <div className="triangle-icon"></div>
            <span className="location-text">Москва - Глухачева 11</span>
          </div>
          
          <div className="header-center">
            <img src={AzovLogo} alt="Azov" className="azov-logo" />
          </div>
          
          <div className="header-right">
            <img src={SearchIcon} alt="Search" className="header-icon" />
            <img src={HeartIcon} alt="Favorites" className="header-icon" />
            <img src={ProfileIcon} alt="Profile" className="header-icon" />
          </div>
        </div>
      </header>

      <div className="selection-panel">
        <div className="selection-left">
          <input 
            type="checkbox" 
            className="select-all-checkbox"
            checked={selectAll}
            onChange={(e) => handleSelectAll(e.target.checked)}
          />
          <span className="select-all-text">Выбрать все</span>
        </div>
        
        <div className="selection-right">
          <button className="buy-all-btn">
            Купить - {totalPrice}P
          </button>
        </div>
      </div>

      <div className="divider-line"></div>

      <div className="delivery-section">
        <div className="delivery-content">
          <img src={DeliverIcon} alt="Delivery" className="delivery-section-icon" />
          <span className="delivery-section-text">
            Доставка по клику из пункта выдачи - <span className="delivery-price">0₽</span>
          </span>
        </div>
        <div className="delivery-divider-line"></div>
      </div>

      <main className="main-content">
        <div className="cart-container">
          <div className="left-column">
            {cartItems.filter(item => item.position === 'left').map(item => (
              <div key={item.id} className="product-card">
                <div className="product-image-container">
                  <input 
                    type="checkbox" 
                    className="product-checkbox"
                    checked={item.selected}
                    onChange={() => toggleItemSelection(item.id)}
                  />
                  <img src={item.image} alt={item.name} className="product-image" />
                </div>
                
                <div className="product-details">
                  <div className="price-section-top">
                    <img src={WalletIcon} alt="Wallet" className="wallet-icon" />
                    <span className="product-price">{item.price}₽</span>
                  </div>
                  
                  <div className="product-name">{item.name}</div>
                  
                  {item.description && (
                    <div className="product-description">{item.description}</div>
                  )}
                  
                  <div className="delivery-time">{item.delivery}</div>
                  
                  <div className="return-text">{item.return}</div>
                  
                  <div className="product-bottom-actions">
                    <div className="action-icons">
                      <img 
                        src={TrashIcon} 
                        alt="Удалить" 
                        className="action-icon trash-icon" 
                        onClick={() => removeItem(item.id)}
                      />
                      <img src={LinkIcon} alt="Поделиться" className="action-icon link-icon" />
                    </div>
                    
                    <div className="quantity-controls">
                      <button 
                        className="quantity-btn" 
                        onClick={() => updateQuantity(item.id, -1)}
                      >
                        -
                      </button>
                      <span className="quantity">{item.quantity}</span>
                      <button 
                        className="quantity-btn" 
                        onClick={() => updateQuantity(item.id, 1)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="right-column">
            {cartItems.filter(item => item.position === 'right').map(item => (
              <div key={item.id} className="product-card">
                <div className="product-image-container">
                  <input 
                    type="checkbox" 
                    className="product-checkbox"
                    checked={item.selected}
                    onChange={() => toggleItemSelection(item.id)}
                  />
                  <img src={item.image} alt={item.name} className="product-image" />
                </div>
                
                <div className="product-details">
                  <div className="price-section-top">
                    <img src={WalletIcon} alt="Wallet" className="wallet-icon" />
                    <span className="product-price">{item.price}₽</span>
                  </div>
                  
                  <div className="product-name">{item.name}</div>
                  
                  {item.description && (
                    <div className="product-description">{item.description}</div>
                  )}
                  
                  <div className="delivery-time">{item.delivery}</div>
                  
                  <div className="return-text">{item.return}</div>
                  
                  <div className="product-bottom-actions">
                    <div className="action-icons">
                      <img 
                        src={TrashIcon} 
                        alt="Удалить" 
                        className="action-icon trash-icon" 
                        onClick={() => removeItem(item.id)}
                      />
                      <img src={LinkIcon} alt="Поделиться" className="action-icon link-icon" />
                    </div>
                    
                    <div className="quantity-controls">
                      <button 
                        className="quantity-btn" 
                        onClick={() => updateQuantity(item.id, -1)}
                      >
                        -
                      </button>
                      <span className="quantity">{item.quantity}</span>
                      <button 
                        className="quantity-btn" 
                        onClick={() => updateQuantity(item.id, 1)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default BasketPage;