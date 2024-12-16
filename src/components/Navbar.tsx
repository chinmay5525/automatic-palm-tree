import  { useState } from 'react';
import './Navbar.css';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isShopDropdownOpen, setIsShopDropdownOpen] = useState(false);

  const categories = [
    { icon: "🥬", title: "Homemade Pickles", link: "/homemade-pickles" },
    { icon: "🌶️", title: "Chutneys", link: "/chutneys" },
    { icon: "🥭", title: "Seasonal Pickle", link: "/seasonal" },
    { icon: "🎁", title: "30% OFF Combos", link: "/combos" },
    { icon: "✨", title: "All", link: "/all" },
    { icon: "🆕", title: "Launching Soon", link: "/upcoming", isNew: true }
  ];

  const shopCategories = [
    {
      title: "Pickles",
      items: [
        { name: "Mango Pickle", link: "/pickles/mango" },
        { name: "Lemon Pickle", link: "/pickles/lemon" },
        { name: "Mixed Pickle", link: "/pickles/mixed" },
        { name: "Green Chilli Pickle", link: "/pickles/green-chilli" },
        { name: "Garlic Pickle", link: "/pickles/garlic" }
      ]
    },
    {
      title: "Chutneys",
      items: [
        { name: "Coconut Chutney", link: "/chutneys/coconut" },
        { name: "Tomato Chutney", link: "/chutneys/tomato" },
        { name: "Peanut Chutney", link: "/chutneys/peanut" },
        { name: "Mint Chutney", link: "/chutneys/mint" },
        { name: "Tamarind Chutney", link: "/chutneys/tamarind" }
      ]
    },
    {
      title: "Special Combos",
      items: [
        { name: "Festival Pack", link: "/combos/festival" },
        { name: "Family Pack", link: "/combos/family" },
        { name: "Gift Pack", link: "/combos/gift" },
        { name: "Monthly Pack", link: "/combos/monthly" },
        { name: "Sample Pack", link: "/combos/sample" }
      ]
    },
    {
      title: "New Arrivals",
      items: [
        { name: "Seasonal Special", link: "/new/seasonal" },
        { name: "Limited Edition", link: "/new/limited" },
        { name: "Premium Range", link: "/new/premium" },
        { name: "Festival Special", link: "/new/festival" }
      ]
    }
  ];

  return (
    <div className="navbar-wrapper">
      <nav className="main-nav">
        <div className="container nav-container">
          <div className="logo-section">
            <img src={logo} alt="Shrihari" className="brand-logo" />
          </div>

          <div className="nav-links">
            <div className="primary-links">
              <div 
                className="shop-dropdown"
                onMouseEnter={() => {setIsShopDropdownOpen(true)}}
                onMouseLeave={() => {setIsShopDropdownOpen(false)}}
              >
                <a href="/shop" className="nav-link">
                  Shop <span className="dropdown-arrow">▼</span>
                </a>
                {isShopDropdownOpen && (
                  <div className="dropdown-content mega-menu">
                    <div className="container">
                      <div className="mega-menu-content">
                        {shopCategories.map((category, index) => (
                          <div key={index} className="mega-menu-column">
                            <h3 className="mega-menu-title">{category.title}</h3>
                            <ul className="mega-menu-list">
                              {category.items.map((item, itemIndex) => (
                                <li key={itemIndex}>
                                  <a href={item.link}>{item.name}</a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                        <div className="mega-menu-featured">
                          <img src="/featured-product.jpg" alt="Featured Product" />
                          <div className="featured-content">
                            <h3>Special Offer</h3>
                            <p>Get 20% off on all pickle combos</p>
                            <a href="/offers" className="featured-btn">Shop Now</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <a href="/taste" className="nav-link">Shop by taste</a>
              <a href="/story" className="nav-link">Our Story</a>
              <a href="/blogs" className="nav-link">Blogs and Recipes</a>
              <a href="/contact" className="nav-link">Contact us</a>
            </div>

            <div className="nav-actions">
              <div className="search-bar">
                <input type="text" placeholder="Search our store" />
                <button className="search-btn"></button>
              </div>
              <div className="icon-group">
                <a href="/profile" className="icon-link">
                  <i className="fas fa-user"></i>
                </a>
                <a href="/cart" className="icon-link">
                  <i className="fas fa-shopping-cart"></i>
                  <span className="cart-count">0</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Category Navigation */}
      <div className="category-nav">
        <div className="container">
          <div className="category-scroll">
            {categories.map((category, index) => (
              <a 
                key={index} 
                href={category.link} 
                className={`category-item ${category.isNew ? 'new-item' : ''}`}
              >
                <span className="category-icon">{category.icon}</span>
                <span className="category-title">{category.title}</span>
                {category.isNew && <span className="new-badge">New</span>}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar; 