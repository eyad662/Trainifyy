import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-bgp fixed top-0 left-0 w-full z-50 px-4 md:px-28">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">

        <div className="flex items-center gap-3 text-textp">
          <a href="/" className="flex items-center gap-3 text-textp"><img src="src/assets/logo.svg" alt="logo" className="w-10" />
          <h1 className="text-4xl font-bold">Trainify</h1></a>
        </div>

        <button
          className="lg:hidden flex flex-col gap-1 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="w-6 h-1 bg-gray-700"></span>
          <span className="w-6 h-1 bg-gray-700"></span>
          <span className="w-6 h-1 bg-gray-700"></span>
        </button>

        <ul className="hidden lg:flex gap-8 text-gray-700">
          <li><Link to="/" className="hover:opacity-80">Home</Link></li>
          <li><Link to="/internships" className="hover:opacity-80">Internships</Link></li>
          <li><Link to="/history" className="hover:opacity-80">Applying History</Link></li>
        </ul>

        <div className="hidden lg:flex gap-5">
          <button className="text-primary hover:text-primary-hover transition-all duration-200 border-[1px] border-primary px-5 py-2 rounded-md cursor-pointer font-bold">Login</button>
          <button className="bg-primary hover:bg-primary-hover transition-all duration-200 px-5 py-2 rounded-md cursor-pointer font-bold text-bgp">Sign Up</button>
        </div>
      </div>

      {/* Mobile menueee */}

      <div
        className={`absolute top-full right-0 w-full bg-white shadow-lg rounded-lg p-5 flex flex-col gap-5 lg:hidden 
        transition-all duration-300 ease-in-out transform 
        ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5 pointer-events-none"}`}
      >
        <Link to="/" className="hover:opacity-80" onClick={() => setIsOpen(false)}>Home</Link>
        <Link to="/internships" className="hover:opacity-80" onClick={() => setIsOpen(false)}>Internships</Link>
        <Link to="/history" className="hover:opacity-80" onClick={() => setIsOpen(false)}>Applying History</Link>
        <div className="flex gap-4">
          <button className="text-primary hover:text-primary-hover transition-all duration-200 cursor-pointer font-bold" onClick={() => setIsOpen(false)}>Login</button>
          <button className="bg-primary hover:bg-primary-hover transition-all duration-200 px-5 py-2 rounded-md cursor-pointer font-bold text-bgp" onClick={() => setIsOpen(false)}>Sign Up</button>
        </div>
      </div>
    </nav>
  );
}
