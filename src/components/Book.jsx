export default function Book({ title, description, image, price }) {
  return (
    <div className="bg-white border rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition">
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover hover:scale-105 transition duration-500"
        />
      </div>

      <div className="p-4 space-y-2">
        <h3 className="font-semibold text-gray-800 line-clamp-1">{title}</h3>

        <p className="text-sm text-gray-600 line-clamp-2">{description}</p>

        <div className="flex items-center justify-between pt-2">
          <span className="text-sm font-medium text-gray-800">${price}</span>

          <button className="bg-blue-600 text-white text-sm px-4 py-2 rounded-lg hover:bg-blue-700 transition">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
