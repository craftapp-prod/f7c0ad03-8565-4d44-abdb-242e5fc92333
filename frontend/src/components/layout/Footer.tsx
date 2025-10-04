"use client";

import Link from "next/link";
import { Github, Mail, Book, GraduationCap, School } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const schoolInfo = [
    { name: "About School", items: [
      { href: "/about", label: "Our Mission" },
      { href: "/about/history", label: "School History" },
      { href: "/about/leadership", label: "Leadership Team" }
    ]},
    { name: "Academics", items: [
      { href: "/academics/curriculum", label: "Curriculum" },
      { href: "/academics/calendar", label: "Academic Calendar" },
      { href: "/academics/policies", label: "Academic Policies" }
    ]},
    { name: "Resources", items: [
      { href: "/resources/library", label: "Library" },
      { href: "/resources/technology", label: "Technology" },
      { href: "/resources/parent-portal", label: "Parent Portal" }
    ]}
  ];

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center">
              <School className="h-8 w-8 text-primary-600 mr-2" />
              <h3 className="text-xl font-bold text-gray-900">EmamAliMIS</h3>
            </div>
            <p className="text-sm text-gray-500">
              Comprehensive school management system for Emam Ali School, streamlining academic operations and communication.
            </p>
            <div className="flex space-x-4">
              <a href="mailto:contact@emamalimis.edu" className="text-gray-500 hover:text-primary-600 transition">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {schoolInfo.map((section) => (
            <div key={section.name} className="space-y-4">
              <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">{section.name}</h4>
              <ul className="space-y-2">
                {section.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-gray-500 hover:text-primary-600 transition flex items-center"
                    >
                      <span className="mr-2">•</span>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">Contact Us</h4>
            <address className="not-italic text-sm text-gray-500 space-y-2">
              <p>Emam Ali School</p>
              <p>123 Education Street</p>
              <p>Knowledge City, ED 12345</p>
              <p>Phone: (123) 456-7890</p>
              <p>Email: <a href="mailto:contact@emamalimis.edu" className="hover:text-primary-600">contact@emamalimis.edu</a></p>
            </address>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-gray-500">
              &copy; {currentYear} Emam Ali School Management Information System. All rights reserved.
            </p>
          </div>

          <div className="flex space-x-6">
            <Link
              href="/privacy-policy"
              className="text-sm text-gray-500 hover:text-primary-600 transition"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className="text-sm text-gray-500 hover:text-primary-600 transition"
            >
              Terms of Service
            </Link>
            <Link
              href="/contact"
              className="text-sm text-gray-500 hover:text-primary-600 transition"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;