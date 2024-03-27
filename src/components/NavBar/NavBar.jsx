import { NavLink } from "react-router-dom";

const NavBar = () => {
  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#23BE0A] border border-[#23BE0A] font-semibold" : ""
          }
        >
          Home
        </NavLink>
      </li>

      <li>
        <NavLink to="/listed books"  className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#23BE0A] border border-[#23BE0A] font-semibold" : ""
          }>Listed Books</NavLink>
      </li>
      <li>
        <NavLink to="pages to read"  className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#23BE0A] border border-[#23BE0A] font-semibold" : ""
          }>Pages to Read</NavLink>
      </li>
      <li>
        <NavLink to="/latest books"  className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "border text-[#23BE0A] font-semibold" : "text-[#131313]"
          }>Latest Books</NavLink>
      </li>
      <li>
        <NavLink to="/about"  className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "border text-[#23BE0A] font-semibold" : "text-[#131313]"
          }>About Us</NavLink>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {links}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Book Corner</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end gap-4">
          <a className="btn bg-[#23BE0A] text-white">Sign In</a>
          <a className="btn bg-[#59C6D2] text-white">Sign Up</a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
