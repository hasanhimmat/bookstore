import { Helmet } from "react-helmet-async";
import Product from "../components/Product";

export default function Shop() {
  return (
    <>
      <Helmet>
        <title>Shop</title>
      </Helmet>

      <section className="min-h-screen bg-gray-50 py-10 px-4">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="text-center space-y-2">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
              Book Shop
            </h1>
            <p className="text-sm text-gray-500">
              Explore popular books and start reading today
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
          </div>
        </div>
      </section>
    </>
  );
}
