import NavItem from "./ui/NavItem";

export default function Navbar() {
  return (
    <nav className="bg-white border-b shadow-sm">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex items-center justify-center h-16">
          <ul className="flex items-center gap-6 text-sm md:text-base font-medium text-gray-700">
            <li>
              <NavItem to="/">Home</NavItem>
            </li>

            <li>
              <NavItem to="/shop">Shop</NavItem>
            </li>

            <li>
              <NavItem to="/blog">Blog</NavItem>
            </li>

            <li>
              <NavItem to="/about">About</NavItem>
            </li>

            <li>
              <NavItem to="/contact">Contact</NavItem>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
