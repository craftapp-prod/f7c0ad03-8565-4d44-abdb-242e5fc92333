"use client";

import Link from "next/link";
import { useAuth } from "@/hooks/useAuth";
import { User, LogOut, LogIn, UserPlus, Home, Book, Calendar, MessageSquare, Settings, Users } from "lucide-react";
import Image from "next/image";
import { API_URL } from "@/utils/env";

const Header = () => {
  const { isAuthenticated, logout, user } = useAuth();

  const navItems = [
    { href: "/", icon: Home, label: "Home" },
    { href: "/students", icon: Users, label: "Students" },
    { href: "/teachers", icon: User, label: "Teachers" },
    { href: "/courses", icon: Book, label: "Courses" },
    { href: "/calendar", icon: Calendar, label: "Calendar" },
    { href: "/messages", icon: MessageSquare, label: "Messages" },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <div className="flex items-center space-x-3">
              <Image
                src={`${API_URL}/assets/default/craftapp-logo.svg`}
                alt="EmamAliMIS Logo"
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
                EmamAliMIS
              </Link>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center text-gray-600 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium transition"
              >
                <item.icon className="mr-1 h-4 w-4" />
                {item.label}
              </Link>
            ))}

            {isAuthenticated ? (
              <>
                {user?.role === 'admin' && (
                  <Link
                    href="/admin"
                    className="flex items-center text-gray-600 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium transition"
                  >
                    <Settings className="mr-1 h-4 w-4" />
                    Admin
                  </Link>
                )}
                <button
                  onClick={logout}
                  className="flex items-center text-gray-600 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium transition"
                >
                  <LogOut className="mr-1 h-4 w-4" />
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/login"
                  className="flex items-center text-gray-600 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium transition"
                >
                  <LogIn className="mr-1 h-4 w-4" />
                  Login
                </Link>
                <Link
                  href="/register"
                  className="flex items-center bg-primary-600 text-white hover:bg-primary-700 px-4 py-2 rounded-md text-sm font-medium transition"
                >
                  <UserPlus className="mr-1 h-4 w-4" />
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