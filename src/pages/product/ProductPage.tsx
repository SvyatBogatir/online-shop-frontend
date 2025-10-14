import './ProductPage.css';

const AzovLogo = '/Azov.svg';
const SearchIcon = '/search.svg';
const HeartIcon = '/heart.svg';
const ProfileIcon = '/profile.svg';
const BasketIcon = '/basket.svg';
const ManImage = '/man.svg';
const WalletIcon = '/wallet.svg';
const StarIcon = '/star.svg';
const CommentIcon = '/comment.svg';

function ProductPage() {
  const handleSearchClick = () => {
    console.log('Search clicked');
  };

  const handleHeartClick = () => {
    console.log('Heart clicked');
  };

  const handleProfileClick = () => {
    console.log('Profile clicked');
  };

  const handleBasketClick = () => {
    console.log('Basket clicked');
  };

  const handleProductHeartClick = () => {
    console.log('Product heart clicked');
  };

  const handleProductBasketClick = () => {
    console.log('Product basket clicked');
  };

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
            <img 
              src={SearchIcon} 
              alt="Search" 
              className="header-icon clickable-icon" 
              onClick={handleSearchClick}
            />
            <img 
              src={HeartIcon} 
              alt="Favorites" 
              className="header-icon clickable-icon" 
              onClick={handleHeartClick}
            />
            <img 
              src={ProfileIcon} 
              alt="Profile" 
              className="header-icon clickable-icon" 
              onClick={handleProfileClick}
            />
            <img 
              src={BasketIcon} 
              alt="Basket" 
              className="header-icon clickable-icon" 
              onClick={handleBasketClick}
            />
          </div>
        </div>
      </header>

      
      <main className="product-main-content">
        <div className="product-container">
          
          <div className="product-left">
            <img src={ManImage} alt="Product" className="product-image" />
          </div>

          
          <div className="product-right">
            <div className="product-card">
              
              <div className="product-top-section">
                <div className="price-section">
                  <img src={WalletIcon} alt="Wallet" className="wallet-icon" />
                  <span className="price-text">Он вам заплатит₽</span>
                </div>
                <div className="action-icons">
                  <img 
                    src={HeartIcon} 
                    alt="Like" 
                    className="action-icon heart-icon clickable-icon" 
                    onClick={handleProductHeartClick}
                  />
                  <img 
                    src={BasketIcon} 
                    alt="Add to basket" 
                    className="action-icon basket-icon clickable-icon" 
                    onClick={handleProductBasketClick}
                  />
                </div>
              </div>

              
              <div className="stats-section">
                <div className="rating-card">
                  <span className="rating-value">4,9</span>
                  <img src={StarIcon} alt="Star" className="star-icon" />
                  <span className="rating-count">3 939 оценок</span>
                </div>
                <div className="questions-card">
                  <img src={CommentIcon} alt="Comments" className="comment-icon" />
                  <span className="questions-text">102 вопроса</span>
                </div>
              </div>

              
              <div className="seller-info">
                <span className="seller-text">Александр Шпончик, замужем, 300 метров от вас.</span>
              </div>

              
              <div className="product-description">
                <p>Новая модель новой коллекции<br />
                способен на разного вида развлечения и увлечения<br />
                Работает 24\7. При поломке обращаться к специалисту.</p>
              </div>

              
              <div className="delivery-info">
                <span className="delivery-text">Доставим сейчас</span>
                <span className="return-text">Бесплатный отказ</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default ProductPage;