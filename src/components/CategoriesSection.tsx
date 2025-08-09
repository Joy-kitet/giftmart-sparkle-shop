import { ArrowRight } from "lucide-react";

const CategoriesSection = () => {
  const categories = [
    {
      id: 1,
      name: "Fresh Produce",
      description: "Farm-fresh fruits & vegetables",
      icon: "🥬",
      gradient: "from-green-400 to-green-600",
      items: "200+ items"
    },
    {
      id: 2,
      name: "Dairy & Eggs",
      description: "Fresh dairy products",
      icon: "🥛",
      gradient: "from-blue-400 to-blue-600",
      items: "50+ items"
    },
    {
      id: 3,
      name: "Meat & Seafood",
      description: "Premium quality meats",
      icon: "🥩",
      gradient: "from-red-400 to-red-600",
      items: "75+ items"
    },
    {
      id: 4,
      name: "Pantry Staples",
      description: "Rice, pasta & essentials",
      icon: "🌾",
      gradient: "from-yellow-400 to-orange-500",
      items: "150+ items"
    },
    {
      id: 5,
      name: "Beverages",
      description: "Drinks & refreshments",
      icon: "🥤",
      gradient: "from-purple-400 to-purple-600",
      items: "100+ items"
    },
    {
      id: 6,
      name: "Household",
      description: "Cleaning & home care",
      icon: "🧽",
      gradient: "from-teal-400 to-teal-600",
      items: "80+ items"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            Shop by Category
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover fresh ingredients and household essentials organized just for you
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {categories.map((category, index) => (
            <div
              key={category.id}
              className="card-category group"
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
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {category.name}
                </h3>
                <p className="text-muted-foreground mb-3">
                  {category.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-primary">
                    {category.items}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    Shop now →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Categories Button */}
        <div className="text-center">
          <button className="btn-outline group">
            View All Categories
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;