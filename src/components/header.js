import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"

const Header = ({ siteTitle }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }
  return (
    <header className="bg-gray-500 sm:flex sm:justify-between sm:items-center sm:px-4 sm:py-3">
      <div className="flex items-center justify-between px-4 py-3 sm:p-0">
        <div>
          <img src="" alt="" />
          <h1 className="text-white">
            <Link to="/">{siteTitle}</Link>
          </h1>
        </div>
        <div className="sm:hidden">
          <button
            onClick={toggleMenu}
            type="button"
            className="block text-gray-300 hover:text-white focus:text-white focus:outline-none"
          >
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              {isOpen ? (
                <path
                  fillRule="evenodd"
                  d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                />
              )}
            </svg>
          </button>
        </div>
      </div>
      <div className={`px-2 pt-2 pb-4 sm:flex ${isOpen ? "block" : "hidden"}`}>
        <Link
          to="/"
          className="block px-2 py-1 text-white font-semibold rounded hover:bg-gray-600"
        >
          Home
        </Link>
        <Link
          to="/about"
          className="block px-2 py-1 text-white font-semibold rounded hover:bg-gray-600"
        >
          About
        </Link>
        <Link
          to="/contact"
          className="block mt-1 px-2 py-1 text-white font-semibold rounded hover:bg-gray-600 sm:mt-0 sm:ml-2"
        >
          Contact
        </Link>
        <Link
          to="/resources"
          className="block mt-1 px-2 py-1 text-white font-semibold rounded hover:bg-gray-600 sm:mt-0 sm:ml-2"
        >
          Resources
        </Link>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
