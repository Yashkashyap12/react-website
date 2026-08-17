import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="border-b border-gray-200">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="text-xl font-bold">
            MyStore
          </div>

          <nav className="flex items-center gap-6 text-sm font-medium">
            <a
              href="/"
              className="transition hover:text-gray-600"
            >
              Home
            </a>

            <a
              href="/products"
              className="transition hover:text-gray-600"
            >
              Products
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <button
              type="button"
              className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium transition hover:bg-gray-100"
            >
              Login
            </button>

            <button
              type="button"
              className="rounded-lg bg-black px-4 py-2 text-sm font-medium text-white transition hover:bg-gray-800"
            >
              Cart
            </button>
          </div>
        </div>
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="border-t border-gray-200">
        <div className="mx-auto max-w-7xl px-4 py-8 text-center text-sm text-gray-500">
          © 2026 MyStore. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;