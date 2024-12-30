import React from "react";
import Link from "next/link";

interface HeaderProps {
  showViewAll: boolean;
  text: string;
}
const Header: React.FC<HeaderProps> = ({ showViewAll, text }) => {
  return (
    <nav className="bg-white shadow-md border border-gray-200 w-full h-24">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" aria-label="Home" className="text-2xl font-bold text-blue-500 tracking-tight">
          MORENT
        </Link>

        {/* Search Bar */}
        <div className="relative flex-1 max-w-md mx-6">
          <input
            type="text"
            placeholder="Search..."
            aria-label="Search"
            className="w-full px-4 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute right-3 top-2.5 h-5 w-5 text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-4.35-4.35M16.65 16.65A7.5 7.5 0 1116.65 2a7.5 7.5 0 010 15z"
            />
          </svg>
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-6">
          <Link href="/" aria-label="Home">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-600 hover:text-blue-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 9.75L12 3l9 6.75V21a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 21V9.75z"
              />
            </svg>
          </Link>
          <Link href="/notifications" aria-label="Notifications">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-600 hover:text-blue-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 17h5l-1.405-1.405C18.37 15.185 18 14.62 18 14V8a6 6 0 10-12 0v6c0 .62-.37 1.185-.595 1.595L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
          </Link>
          <Link href="/profile" aria-label="Profile">
            <img src="/user.png" className="h-6 w-6 rounded-full" alt="User profile" />
          </Link>
        </div>

        {/* Optional View All */}
        {showViewAll && (
          <div className="text-blue-600 text-sm">
            <Link href="/view-all">{text}</Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
