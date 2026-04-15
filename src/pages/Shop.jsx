import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Product from "../components/Product";

export default function Shop() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const res = await fetch("/api/book");

        if (!res.ok) {
          throw new Error("Failed to load books");
        }

        const data = await res.json();
        setBooks(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  return (
    <>
      <Helmet>
        <title>Shop</title>
      </Helmet>

      <section className="min-h-screen bg-gray-50 py-10 px-4">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold text-gray-800">Book Shop</h1>
            <p className="text-sm text-gray-500">
              Explore popular books and start reading today
            </p>
          </div>

          {error && <div className="text-center text-red-500">{error}</div>}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {loading
              ? Array.from({ length: 6 }).map((_, i) => (
                  <div
                    key={i}
                    className="bg-white p-4 rounded-xl shadow space-y-3"
                  >
                    <Skeleton height={180} />
                    <Skeleton height={20} width="70%" />
                    <Skeleton height={15} count={2} />
                  </div>
                ))
              : books.map((book) => (
                  <div
                    key={book.id}
                    className="transform hover:scale-[1.02] transition duration-200"
                  >
                    <Product
                      name={book.name}
                      description={book.description}
                      price={book.price}
                      image={book.image}
                    />
                  </div>
                ))}
          </div>
        </div>
      </section>
    </>
  );
}
