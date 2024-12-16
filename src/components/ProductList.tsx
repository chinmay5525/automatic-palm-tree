import productImage from '../assets/ImageOne.webp';

interface Product {
  id: number;
  name: string;
  mainTitle: string;
  subTitle: string;
  price: number;
  mrp: number;
  image: string;
  rating: number;
  reviews: number;
  weight: string;
}

const ProductList = () => {
  const products: Product[] = [
    {
      id: 1,
      name: "Nani's special pack",
      mainTitle: "Nani's special pack",
      subTitle: "Pack of 8 (75g each)",
      price: 599,
      mrp: 699,
      image: productImage,
      rating: 4.6,
      reviews: 290,
      weight: "75g"
    },
    {
      id: 2,
      name: "Punjabi Mango Pickle",
      mainTitle: "Punjabi Mango Pickle",
      subTitle: "North Indian Mango Pickle",
      price: 299,
      mrp: 400,
      image: productImage,
      rating: 4.7,
      reviews: 252,
      weight: "325g"
    },
    {
      id: 3,
      name: "Green Chilli Pickle",
      mainTitle: "Green Chilli Pickle",
      subTitle: "Hari Mirch ka Achar",
      price: 299,
      mrp: 400,
      image: productImage,
      rating: 4.7,
      reviews: 166,
      weight: "325g"
    },
    {
      id: 4,
      name: "Crushed Lemon Pickle",
      mainTitle: "Crushed Lemon Pickle",
      subTitle: "Nimbu ka Achar",
      price: 299,
      mrp: 400,
      image: productImage,
      rating: 4.8,
      reviews: 283,
      weight: "325g"
    },
  ];

  return (
    <div className="container">
        <h3 className='text-center'>Our Mixed Pickles</h3>
      <style>
        {`
          .product-container {
            display: flex;
            gap: 3rem;
            justify-content: center;
            padding: 20px 0;
            flex-wrap: wrap;
          }

          .product-card {
            flex: 0 0 auto;
            width: 280px;
            text-align: center;
            position: relative;
          }

          .discount-badge {
            position: absolute;
            top: 10px;
            left: 10px;
            background-color: #FFD700;
            border-radius: 50%;
            width: 60px;
            height: 60px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: bold;
            transform: rotate(-20deg);
          }

          .product-image {
            width: 100%;
            height: 280px;
            object-fit: contain;
            margin-bottom: 15px;
          }

          .product-title {
            font-size: 1.1rem;
            font-weight: 600;
            margin-bottom: 5px;
          }

          .product-subtitle {
            color: #666;
            font-size: 0.9rem;
            margin-bottom: 10px;
          }

          .rating-container {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 5px;
            margin-bottom: 10px;
          }

          .star {
            color: #FFD700;
          }

          .price-container {
            margin-bottom: 15px;
          }

          .mrp {
            text-decoration: line-through;
            color: #666;
            margin-right: 10px;
          }

          .select-container {
            margin-bottom: 10px;
          }

          .add-to-cart-btn {
            background-color: #ff6b35;
            border: none;
            padding: 8px 20px;
            border-radius: 5px;
            color: white;
            font-weight: 600;
          }
        `}
      </style>

      <div className="product-container">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <div className="discount-badge">
              UPTO 25% OFF
            </div>
            <img 
              src={product.image} 
              alt={product.name}
              className="product-image"
            />
            <h3 className="product-title">{product.mainTitle}</h3>
            <p className="product-subtitle">{product.subTitle}</p>
            <div className="rating-container">
              <span className="star">★</span>
              <span>{product.rating}</span>
              <span>| {product.reviews} Reviews</span>
            </div>
            <div className="select-container">
              <select className="form-select">
                <option value={`${product.weight} - Rs ${product.price} (MRP ${product.mrp})`}>
                  {product.weight} - Rs {product.price} (MRP {product.mrp})
                </option>
              </select>
            </div>
            <button className="add-to-cart-btn">
              Add to cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList; 