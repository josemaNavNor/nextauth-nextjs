"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { signIn, signOut, useSession } from "next-auth/react";

const links = [
  { href: "/", label: "Home" },
  { href: "/dashboard", label: "Dashboard" },
];

function NavBar() {
  const { data: session } = useSession();
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="text-xl font-bold text-white shrink-0">
            NextAuth.js App
          </Link>

          {/* Desktop nav */}
          <div className="hidden items-center gap-1 sm:flex">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? "bg-gray-900 text-white"
                    : "text-gray-300 hover:bg-gray-700 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}

            {session?.user ? (
              <div className="ml-4 flex items-center gap-3">
                <span className="hidden text-sm text-gray-300 lg:block">
                  {session.user.name ?? session.user.email}
                </span>
                {session.user.image && (
                  <img
                    src={session.user.image}
                    alt=""
                    className="size-8 rounded-full"
                  />
                )}
                <button
                  onClick={() => signOut()}
                  className="rounded-md bg-blue-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-600"
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <button
                onClick={() => signIn()}
                className="ml-4 rounded-md bg-blue-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-600"
              >
                Sign In
              </button>
            )}
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white sm:hidden"
            aria-label="Toggle menu"
          >
            <svg
              className="size-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="border-t border-gray-700 px-2 pb-3 pt-2 sm:hidden">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`block rounded-md px-3 py-2 text-base font-medium ${
                pathname === link.href
                  ? "bg-gray-900 text-white"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-3 border-t border-gray-700 pt-3">
            {session?.user ? (
              <div className="space-y-2">
                <div className="flex items-center gap-3 px-3 text-sm text-gray-300">
                  {session.user.image && (
                    <img
                      src={session.user.image}
                      alt=""
                      className="size-8 rounded-full"
                    />
                  )}
                  <span className="truncate">
                    {session.user.name ?? session.user.email}
                  </span>
                </div>
                <button
                  onClick={() => signOut()}
                  className="w-full rounded-md bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-600"
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <button
                onClick={() => signIn()}
                className="w-full rounded-md bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-600"
              >
                Sign In
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
