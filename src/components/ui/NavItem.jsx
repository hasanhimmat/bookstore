import { NavLink } from "react-router";

const NavItem = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      end={to === "/"}
      className={({ isActive }) =>
        `relative transition ${
          isActive ? "text-blue-600" : "hover:text-blue-600"
        } after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-blue-600 after:transition-all ${
          isActive ? "after:w-full" : "after:w-0 hover:after:w-full"
        }`
      }
    >
      {children}
    </NavLink>
  );
};

export default NavItem;
