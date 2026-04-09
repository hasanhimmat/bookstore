import { Helmet } from "react-helmet-async";
import Article from "../../components/Article";

export default function Blog() {
  return (
    <>
      <Helmet>
        <title>Blog</title>
      </Helmet>
      <div className="max-w-6xl mx-auto px-4 py-6">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Latest Blog</h2>

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Article />
          <Article />
          <Article />
          <Article />
          <Article />
          <Article />
        </section>
      </div>
    </>
  );
}
