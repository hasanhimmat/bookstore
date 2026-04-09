import { Helmet } from "react-helmet-async";
import Book from "../components/Book";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>

      <section className="bg-gray-50 min-h-screen">
        <div className="bg-white border-b">
          <div className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
            <div className="space-y-5">
              <h1 className="text-3xl md:text-5xl font-bold text-gray-800 leading-tight">
                Discover Your Next Favorite Book
              </h1>

              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                Explore thousands of books from best-selling authors. Improve
                your knowledge, skills, and imagination with every page you
                read.
              </p>

              <div className="flex gap-3">
                <a
                  href="/shop"
                  className="bg-blue-600 text-white px-5 py-2 rounded-lg text-sm hover:bg-blue-700 transition"
                >
                  Shop Now
                </a>

                <a
                  href="/blog"
                  className="border border-gray-300 px-5 py-2 rounded-lg text-sm hover:bg-gray-100 transition"
                >
                  Explore Blog
                </a>
              </div>
            </div>

            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=1200&auto=format&fit=crop"
                alt="books"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-6">
            Popular Books
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Book
              title="Atomic Habits"
              description="A powerful guide to building good habits and breaking bad ones."
              image="https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&w=1200&auto=format&fit=crop"
              price={12.99}
            />

            <Book
              title="Deep Work"
              description="Rules for focused success in a distracted world."
              image="https://images.unsplash.com/photo-1528207776546-365bb710ee93?q=80&w=1200&auto=format&fit=crop"
              price={10.5}
            />

            <Book
              title="Psychology of Money"
              description="Timeless lessons on wealth, greed, and happiness."
              image="https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=1200&auto=format&fit=crop"
              price={14.0}
            />
          </div>
        </div>
      </section>
    </>
  );
}
