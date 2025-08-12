import { Star, ShoppingCart, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: "Organic Bananas",
      price: 2.99,
      originalPrice: 3.99,
      rating: 4.8,
      reviews: 124,
      image: "🍌",
      category: "Fresh Produce",
      discount: 25,
      inStock: true
    },
    {
      id: 2,
      name: "Fresh Whole Milk",
      price: 3.49,
      rating: 4.9,
      reviews: 89,
      image: "🥛",
      category: "Dairy",
      inStock: true
    },
    {
      id: 3,
      name: "Premium Ground Coffee",
      price: 12.99,
      originalPrice: 15.99,
      rating: 4.7,
      reviews: 256,
      image: "☕",
      category: "Beverages",
      discount: 19,
      inStock: true
    },
    {
      id: 4,
      name: "Organic Chicken Breast",
      price: 8.99,
      rating: 4.6,
      reviews: 78,
      image: "🍗",
      category: "Meat",
      inStock: true
    },
    {
      id: 5,
      name: "Fresh Strawberries",
      price: 4.99,
      originalPrice: 6.99,
      rating: 4.9,
      reviews: 134,
      image: "🍓",
      category: "Fresh Produce",
      discount: 29,
      inStock: true
    },
    {
      id: 6,
      name: "Whole Grain Bread",
      price: 2.79,
      rating: 4.5,
      reviews: 67,
      image: "🍞",
      category: "Bakery",
      inStock: true
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">
            Featured Products
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hand-picked favorites and best-selling items loved by our customers
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Product Image */}
              <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-50 flex items-center justify-center">
                <div className="text-6xl group-hover:scale-110 transition-transform duration-300">
                  {product.image}
                </div>
                
                {/* Discount Badge */}
                {product.discount && (
                  <Badge className="absolute top-3 left-3 bg-orange-500 text-white">
                    -{product.discount}%
                  </Badge>
                )}
                
                {/* Wishlist Button */}
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute top-3 right-3 bg-white/80 hover:bg-white text-gray-700 rounded-full w-8 h-8 p-0"
                >
                  <Heart className="h-4 w-4" />
                </Button>
              </div>

              {/* Product Info */}
              <div className="p-4 space-y-3">
                {/* Category */}
                <Badge variant="secondary" className="text-xs">
                  {product.category}
                </Badge>

                {/* Name */}
                <h3 className="font-semibold text-gray-800 group-hover:text-green-600 transition-colors">
                  {product.name}
                </h3>

                {/* Rating */}
                <div className="flex items-center space-x-2">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium ml-1">{product.rating}</span>
                  </div>
                  <span className="text-xs text-gray-500">
                    ({product.reviews} reviews)
                  </span>
                </div>

                {/* Price */}
                <div className="flex items-center space-x-2">
                  <span className="text-lg font-bold text-gray-800">
                    ${product.price}
                  </span>
                  {product.originalPrice && (
                    <span className="text-sm text-gray-500 line-through">
                      ${product.originalPrice}
                    </span>
                  )}
                </div>

                {/* Add to Cart Button */}
                <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white group">
                  <ShoppingCart className="h-4 w-4 mr-2 group-hover:animate-bounce" />
                  Add to Cart
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Products Button */}
        <div className="text-center mt-12">
          <Button size="lg" className="border-2 border-green-600 text-green-600 bg-transparent hover:bg-green-600 hover:text-white">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;