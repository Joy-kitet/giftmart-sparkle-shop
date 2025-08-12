import { ArrowRight } from "lucide-react";

const CategoriesSection = () => {
  const categories = [
    {
      id: 1,
      name: "Fresh Produce",
      description: "Farm-fresh fruits & vegetables",
      icon: "🥬",
      gradient: "from-green-500 to-green-700",
      items: "200+ items"
    },
    {
      id: 2,
      name: "Dairy & Eggs",
      description: "Fresh dairy products",
      icon: "🥛",
      gradient: "from-green-400 to-green-600",
      items: "50+ items"
    },
    {
      id: 3,
      name: "Meat & Seafood",
      description: "Premium quality meats",
      icon: "🥩",
      gradient: "from-orange-400 to-orange-600",
      items: "75+ items"
    },
    {
      id: 4,
      name: "Pantry Staples",
      description: "Rice, pasta & essentials",
      icon: "🌾",
      gradient: "from-orange-400 to-orange-600",
      items: "150+ items"
    },
    {
      id: 5,
      name: "Beverages",
      description: "Drinks & refreshments",
      icon: "🥤",
      gradient: "from-green-400 to-green-600",
      items: "100+ items"
    },
    {
      id: 6,
      name: "Household",
      description: "Cleaning & home care",
      icon: "🧽",
      gradient: "from-green-600 to-green-800",
      items: "80+ items"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">
            Shop by Category
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover fresh ingredients and household essentials organized just for you
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {categories.map((category, index) => (
            <div
              key={category.id}
              className="bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 overflow-hidden cursor-pointer group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`h-32 bg-gradient-to-br ${category.gradient} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-white/10"></div>
                <div className="relative z-10 p-6 h-full flex items-center justify-between">
                  <div className="text-6xl group-hover:scale-110 transition-transform duration-300">
                    {category.icon}
                  </div>
                  <ArrowRight className="text-white h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {category.name}
                </h3>
                <p className="text-gray-600 mb-3">
                  {category.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-green-600">
                    {category.items}
                  </span>
                  <span className="text-sm text-gray-500">
                    Shop now →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Categories Button */}
        <div className="text-center">
          <button className="border-2 border-green-600 text-green-600 bg-transparent px-6 py-3 rounded-lg font-medium hover:bg-green-600 hover:text-white transition-all duration-300 group">
            View All Categories
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;