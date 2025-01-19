import React from "react";
import { ArrowRight, Star, TrendingUp, Clock, Package } from "lucide-react";
import "./Home.css";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  rating: number;
  reviews: number;
}

interface Category {
  name: string;
  image: string;
  description: string;
}

const Home: React.FC = () => {
  const featuredProducts: Product[] = [
    {
      id: 1,
      name: "Premium Sudanese Bakhoor",
      price: 29.99,
      image: "/api/placeholder/300/300",
      rating: 4.8,
      reviews: 156,
    },
    {
      id: 2,
      name: "Traditional Tobe Set",
      price: 149.99,
      image: "/api/placeholder/300/300",
      rating: 4.9,
      reviews: 203,
    },
    {
      id: 3,
      name: "Handcrafted Coffee Pot",
      price: 79.99,
      image: "/api/placeholder/300/300",
      rating: 4.7,
      reviews: 89,
    },
    {
      id: 4,
      name: "Authentic Sudanese Oud",
      price: 59.99,
      image: "/api/placeholder/300/300",
      rating: 4.9,
      reviews: 167,
    },
  ];

  const categories: Category[] = [
    {
      name: "Traditional Fragrances",
      image: "/api/placeholder/600/400",
      description: "Discover authentic Sudanese bakhoor, oud, and perfumes",
    },
    {
      name: "Cultural Clothing",
      image: "/api/placeholder/600/400",
      description: "Elegant tobes and traditional Sudanese attire",
    },
    {
      name: "Home Decor",
      image: "/api/placeholder/600/400",
      description: "Handcrafted items that tell stories of heritage",
    },
  ];

  return (
    <main className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero__overlay">
          <img
            src="/api/placeholder/1920/600"
            alt="Sudanese cultural items"
            className="hero__image"
          />
          <div className="hero__gradient" />
        </div>

        <div className="hero__content">
          <div className="hero__text-container">
            <h1 className="hero__title">
              Experience Authentic Sudanese Heritage
            </h1>
            <p className="hero__description">
              Discover our curated collection of traditional Sudanese products,
              from exquisite fragrances to handcrafted home decor
            </p>
            <button className="hero__cta">
              Shop Now <ArrowRight />
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="features__container">
          <div className="features__grid">
            <div className="feature-card">
              <Package className="feature-card__icon" />
              <div className="feature-card__content">
                <h3 className="feature-card__title">Free Shipping</h3>
                <p className="feature-card__description">On orders over $100</p>
              </div>
            </div>
            <div className="feature-card">
              <Star className="feature-card__icon" />
              <div className="feature-card__content">
                <h3 className="feature-card__title">Premium Quality</h3>
                <p className="feature-card__description">
                  100% authentic products
                </p>
              </div>
            </div>
            <div className="feature-card">
              <TrendingUp className="feature-card__icon" />
              <div className="feature-card__content">
                <h3 className="feature-card__title">Best Prices</h3>
                <p className="feature-card__description">
                  Direct from artisans
                </p>
              </div>
            </div>
            <div className="feature-card">
              <Clock className="feature-card__icon" />
              <div className="feature-card__content">
                <h3 className="feature-card__title">Fast Delivery</h3>
                <p className="feature-card__description">2-5 business days</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="featured-products">
        <div className="featured-products__container">
          <h2 className="featured-products__title">Featured Products</h2>
          <div className="featured-products__grid">
            {featuredProducts.map((product) => (
              <div key={product.id} className="product-card">
                <img
                  src={product.image}
                  alt={product.name}
                  className="product-card__image"
                />
                <div className="product-card__content">
                  <h3 className="product-card__title">{product.name}</h3>
                  <div className="product-card__rating">
                    <div className="rating">
                      <Star className="rating__icon" />
                      <span className="rating__score">{product.rating}</span>
                    </div>
                    <span className="product-card__reviews">
                      ({product.reviews} reviews)
                    </span>
                  </div>
                  <div className="product-card__footer">
                    <span className="product-card__price">
                      ${product.price}
                    </span>
                    <button className="product-card__button">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Showcase */}
      <section className="categories">
        <div className="categories__container">
          <h2 className="categories__title">Explore Our Collections</h2>
          <div className="categories__grid">
            {categories.map((category, index) => (
              <div key={index} className="category-card">
                <img
                  src={category.image}
                  alt={category.name}
                  className="category-card__image"
                />
                <div className="category-card__overlay">
                  <h3 className="category-card__title">{category.name}</h3>
                  <p className="category-card__description">
                    {category.description}
                  </p>
                  <button className="category-card__button">Explore</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter">
        <div className="newsletter__container">
          <h2 className="newsletter__title">Stay Updated</h2>
          <p className="newsletter__description">
            Subscribe to our newsletter to receive updates about new products,
            special offers, and cultural insights about Sudan.
          </p>
          <form className="newsletter__form">
            <input
              type="email"
              placeholder="Enter your email"
              className="newsletter__input"
            />
            <button type="submit" className="newsletter__button">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Home;
