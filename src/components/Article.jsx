import { Link } from "react-router";

export default function Article() {
  return (
    <article className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300 group border border-gray-100">
      <div className="relative w-full aspect-[16/10] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1642821372878-9004c24b7897?q=80&w=1200&auto=format&fit=crop"
          alt="Delicious food"
          className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
        />
        <span className="absolute top-3 left-3 bg-blue-600 text-white text-xs px-3 py-1 rounded-full shadow">
          Food
        </span>
      </div>

      <div className="p-5 space-y-3">
        <h2 className="text-lg font-semibold text-gray-800 line-clamp-2 group-hover:text-blue-600 transition">
          Delicious Food Experience
        </h2>

        <p className="text-gray-600 text-sm line-clamp-3">
          Discover the taste of fresh and healthy food made with natural
          ingredients. A perfect balance of flavor and nutrition.
        </p>

        <div className="flex items-center justify-between pt-2">
          <span className="text-xs text-gray-400">5 min read</span>

          <Link
            to="/blog/hello-world"
            className="text-blue-600 text-sm font-medium flex items-center gap-1 hover:gap-2 transition-all"
          >
            Read →
          </Link>
        </div>
      </div>
    </article>
  );
}
