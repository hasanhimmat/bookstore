import { Helmet } from "react-helmet-async";

export default function About() {
  return (
    <>
      <Helmet>
        <title>About</title>
      </Helmet>

      <section className="bg-gray-50 min-h-screen py-10 px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-10 space-y-6">
          <div className="text-center space-y-3">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
              About Us
            </h1>
            <p className="text-gray-500 text-sm md:text-base max-w-2xl mx-auto">
              Learn more about our journey, mission, and what makes us
              different.
            </p>
          </div>

          <div className="w-full aspect-[16/6] rounded-xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop"
              alt="about"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="space-y-4 text-gray-600 text-sm md:text-base leading-relaxed">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              hic obcaecati provident qui quo odit dolorem autem, veniam
              repellendus voluptatibus labore dolor sed ab voluptates saepe eum
              at placeat. Laudantium atque itaque sed ea consectetur.
            </p>

            <p>
              Cum libero obcaecati tempora labore maxime deleniti vero alias aut
              temporibus provident quibusdam quae laborum iure, repellendus
              iusto sed molestiae. Quasi asperiores porro quia vitae nesciunt
              error.
            </p>

            <p>
              Architecto, excepturi quod ducimus placeat quae a magni voluptate
              similique obcaecati rem omnis. Sit, iste! Tempore, harum.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
