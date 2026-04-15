export default function Product({ name, description, price, image }) {
  return (
    <div className="max-w-sm mx-auto bg-white border rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition group">
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
        />
      </div>

      <div className="p-5 space-y-3">
        <h2 className="text-lg font-semibold text-gray-800">{name}</h2>

        <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">
          {description}
        </p>

        <div className="flex items-center justify-between pt-2">
          <span className="text-sm font-medium text-gray-800">{price}</span>

          <button className="bg-blue-600 text-white text-sm px-4 py-2 rounded-lg hover:bg-blue-700 transition cursor-pointer">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
