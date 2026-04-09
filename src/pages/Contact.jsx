import { Helmet } from "react-helmet-async";

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact</title>
      </Helmet>

      <section className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 space-y-3">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
              Get in Touch
            </h1>
            <p className="text-gray-500 max-w-xl mx-auto text-sm md:text-base">
              We’d love to hear from you. Send us a message and we’ll respond as
              soon as possible.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-stretch">
            <div className="bg-white rounded-3xl shadow-lg p-6 md:p-8 space-y-5 border border-gray-100">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />

              <input
                type="text"
                placeholder="Subject"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />

              <textarea
                rows="5"
                placeholder="Write your message..."
                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              ></textarea>

              <button className="w-full py-3 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 transition shadow-md hover:shadow-lg">
                Send Message
              </button>
            </div>

            <div className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden flex flex-col">
              <div className="aspect-[16/9] w-full">
                <img
                  src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1200&auto=format&fit=crop"
                  alt="contact"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6 md:p-8 space-y-6 flex-1 flex flex-col justify-between">
                <div className="space-y-5 text-sm md:text-base text-gray-600">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-blue-100 text-blue-600 font-bold">
                      📍
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Location</h3>
                      <p>Dhaka, Bangladesh</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-blue-100 text-blue-600 font-bold">
                      ✉️
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Email</h3>
                      <p>support@example.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-blue-100 text-blue-600 font-bold">
                      📞
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Phone</h3>
                      <p>+880 1234-567890</p>
                    </div>
                  </div>
                </div>

                <div className="text-xs text-gray-400 pt-4 border-t">
                  Usually replies within a few hours
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
