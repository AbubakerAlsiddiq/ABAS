import React, { useState, useEffect } from "react";
import {
  Search,
  ShoppingCart,
  Menu,
  User,
  X,
  ChevronDown,
  Facebook,
  Instagram,
  Twitter,
  Mail,
  Phone,
} from "lucide-react";
import "./Nav.css";

const Nav: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const categories = [
    {
      name: "Incense",
      subcategories: ["Bakhoor", "Oud", "Traditional Incense"],
    },
    {
      name: "Fragrances",
      subcategories: ["Perfumes", "Body Oils", "Home Fragrances"],
    },
    {
      name: "Traditional Wardrobe",
      subcategories: ["Men", "Women", "Accessories"],
    },
    {
      name: "Home & Living",
      subcategories: ["Textiles", "Furniture", "Kitchen"],
    },
    {
      name: "Gifts",
      subcategories: ["Gift Sets", "Special Occasions", "Corporate Gifts"],
    },
    {
      name: "Decorations",
      subcategories: ["Wall Art", "Ornaments", "Traditional Crafts"],
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Prevent scrolling when menu is open
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <nav className={`nav ${isScrolled ? "nav--scrolled" : ""}`}>
      {/* Superheader */}
      <div className="superheader">
        <div className="superheader__content">
          <div className="superheader__social">
            <a href="https://facebook.com" className="superheader__link">
              <Facebook size={16} />
            </a>
            <a href="https://instagram.com" className="superheader__link">
              <Instagram size={16} />
            </a>
            <a href="https://twitter.com" className="superheader__link">
              <Twitter size={16} />
            </a>
            <a
              href="tel:+1234567890"
              className="superheader__link superheader__contact"
            >
              <Phone size={16} />
              <span>+1 (234) 567-890</span>
            </a>
            <a
              href="mailto:info@albaitsudani.com"
              className="superheader__link superheader__contact"
            >
              <Mail size={16} />
              <span>info@albaitsudani.com</span>
            </a>
          </div>
          <div className="superheader__info">
            <a href="/about" className="superheader__link">
              About Us
            </a>
            <a href="/contact" className="superheader__link">
              Contact
            </a>
            <a href="/shipping" className="superheader__link">
              Shipping Info
            </a>
            <a href="/faq" className="superheader__link">
              FAQ
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="nav-main">
        <div className="nav-wrapper">
          <button
            className="menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <div className="nav-brand">Al Bait Al Sudani</div>

          <div className="nav-center">
            {categories.map((category) => (
              <div key={category.name} className="nav-category">
                <button className="nav-category__button">
                  {category.name}
                  <ChevronDown size={16} className="nav-category__icon" />
                </button>
                <div className="nav-dropdown">
                  <div className="nav-dropdown__content">
                    <div className="nav-dropdown__section">
                      <h3 className="nav-dropdown__title">{category.name}</h3>
                      <ul className="nav-dropdown__list">
                        {category.subcategories.map((sub) => (
                          <li key={sub} className="nav-dropdown__item">
                            <a
                              href={`/${category.name.toLowerCase()}/${sub
                                .toLowerCase()
                                .replace(" ", "-")}`}
                            >
                              {sub}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="nav-actions">
            <button
              className="nav-action-button"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
            >
              <Search size={20} />
            </button>
            <a href="/account" className="nav-action-button">
              <User size={20} />
            </a>
            <a href="/cart" className="nav-action-button">
              <div className="cart-icon">
                <ShoppingCart size={20} />
                <span className="cart-count">0</span>
              </div>
            </a>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${isMenuOpen ? "mobile-menu--open" : ""}`}>
          <div className="mobile-menu__header">
            <div className="nav-brand">Al Bait Al Sudani</div>
            <button
              className="mobile-menu__close"
              onClick={() => setIsMenuOpen(false)}
            >
              <X size={24} />
            </button>
          </div>
          <div className="mobile-menu__search">
            <input type="text" placeholder="Search products..." />
          </div>
          <div className="mobile-menu__categories">
            {categories.map((category) => (
              <div key={category.name} className="mobile-menu__category">
                <div className="mobile-menu__category-title">
                  {category.name}
                </div>
                <div className="mobile-menu__subcategories">
                  {category.subcategories.map((sub) => (
                    <a
                      key={sub}
                      href={`/${category.name.toLowerCase()}/${sub
                        .toLowerCase()
                        .replace(" ", "-")}`}
                    >
                      {sub}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Search Overlay */}
      {isSearchOpen && (
        <div className="search-overlay">
          <div className="search-overlay__content">
            <div className="search-overlay__header">
              <input
                type="text"
                placeholder="Search products..."
                className="search-overlay__input"
                autoFocus
              />
              <button
                className="search-overlay__close"
                onClick={() => setIsSearchOpen(false)}
              >
                <X size={24} />
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;
