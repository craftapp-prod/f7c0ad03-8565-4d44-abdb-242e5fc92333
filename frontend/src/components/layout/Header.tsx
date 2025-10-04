"use client";

import Link from "next/link";
import { useAuth } from "@/hooks/useAuth";
import { User, LogOut, LogIn, UserPlus } from "lucide-react";
import Image from "next/image";
import { API_URL } from "@/utils/env";

const Header = () => {
  const { isAuthenticated, logout } = useAuth();

  return (
    <header className="bg-white shadow-sm sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            {/* Dynamic logo from S3 */}
            <div className="flex items-center space-x-3">
              <Image
                src={`${API_URL}/assets/default/craftapp-logo.svg`}
                alt="Initial System Logo"
                width={32}
                height={32}
                className="h-8 w-8"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
              <Link
                href="/"
                className="text-xl font-bold text-primary-600 hover:text-primary-500 transition"
              >
                Initial System
              </Link>
            </div>
          </div>

          <nav className="flex items-center space-x-4">
            {isAuthenticated ? (
              <>
                <Link
                  href="/dashboard"
                  className="flex items-center text-gray-600 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium transition"
                >
                  <User className="mr-1" />
                  Dashboard
                </Link>
                <button
                  onClick={logout}
                  className="flex items-center text-gray-600 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium transition"
                >
                  <LogOut className="mr-1" />
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/login"
                  className="flex items-center text-gray-600 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium transition"
                >
                  <LogIn className="mr-1" />
                  Login
                </Link>
                <Link
                  href="/register"
                  className="flex items-center bg-primary-600 text-white hover:bg-primary-700 px-4 py-2 rounded-md text-sm font-medium transition"
                >
                  <UserPlus className="mr-1" />
                  Register
                </Link>
              </>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
