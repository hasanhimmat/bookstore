import { Link } from "react-router";

export default function Navbar() {
  return (
    <nav className="bg-white border-b shadow-sm">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex items-center justify-center h-16">
          <ul className="flex items-center gap-6 text-sm md:text-base font-medium text-gray-700">
            <li>
              <Link
                to="/"
                className="relative hover:text-blue-600 transition after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-blue-600 after:transition-all hover:after:w-full"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/shop"
                className="relative hover:text-blue-600 transition after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-blue-600 after:transition-all hover:after:w-full"
              >
                Shop
              </Link>
            </li>

            <li>
              <Link
                to="/blog"
                className="relative hover:text-blue-600 transition after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-blue-600 after:transition-all hover:after:w-full"
              >
                Blog
              </Link>
            </li>

            <li>
              <Link
                to="/about"
                className="relative hover:text-blue-600 transition after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-blue-600 after:transition-all hover:after:w-full"
              >
                About
              </Link>
            </li>

            <li>
              <Link
                to="/contact"
                className="relative hover:text-blue-600 transition after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-blue-600 after:transition-all hover:after:w-full"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
