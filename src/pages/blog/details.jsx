import { Link } from "react-router";

export default function BlogDetails() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <article className="max-w-2xl w-full bg-white rounded-3xl shadow-xl overflow-hidden transition hover:shadow-2xl">
        <div className="overflow-hidden">
          <img
            className="w-full h-60 object-cover hover:scale-105 transition duration-500"
            src="https://images.unsplash.com/photo-1642821372878-9004c24b7897"
            alt="Delicious food"
          />
        </div>

        <div className="p-6 space-y-4">
          <span className="text-xs uppercase tracking-wide text-blue-500 font-semibold">
            Food & Lifestyle
          </span>

          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 leading-snug">
            Delicious Food Experience
          </h2>

          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            Discover the taste of fresh and healthy food made with natural
            ingredients. This dish brings a perfect balance of flavor,
            nutrition, and presentation that you will love. Enjoy a delightful
            experience with every bite.
          </p>

          <div className="flex items-center justify-between pt-3">
            <Link
              to="/blog/hello-world"
              className="inline-flex items-center gap-2 text-white bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Read More
              <span>→</span>
            </Link>

            <span className="text-xs text-gray-400">5 min read</span>
          </div>
        </div>
      </article>
    </div>
  );
}
