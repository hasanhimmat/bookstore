export default function Product() {
  return (
    <div className="max-w-sm mx-auto bg-white border rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition group">
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&w=1200&auto=format&fit=crop"
          alt="Book"
          className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
        />
      </div>

      <div className="p-5 space-y-3">
        <h2 className="text-lg font-semibold text-gray-800">Atomic Habits</h2>

        <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">
          A proven framework for improving every day. James Clear explains how
          small habits lead to remarkable results in life, work, and personal
          growth.
        </p>

        <div className="flex items-center justify-between pt-2">
          <span className="text-sm font-medium text-gray-800">$14.99</span>

          <button className="bg-blue-600 text-white text-sm px-4 py-2 rounded-lg hover:bg-blue-700 transition cursor-pointer">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
