const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gray-100">
        <div className="mx-auto flex min-h-[500px] max-w-7xl items-center px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-gray-500">
              Welcome to MyStore
            </p>

            <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Discover products you'll love.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
              Explore our latest collection of products, carefully selected
              for quality, style and value.
            </p>

            <div className="mt-8 flex gap-4">
              <a
                href="/products"
                className="rounded-lg bg-black px-6 py-3 text-sm font-semibold text-white transition hover:bg-gray-800"
              >
                Shop Now
              </a>

              <a
                href="/products"
                className="rounded-lg border border-gray-300 bg-white px-6 py-3 text-sm font-semibold transition hover:bg-gray-50"
              >
                View Products
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold">Shop by Category</h2>

          <p className="mt-2 text-gray-500">
            Explore our product categories.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {["Electronics", "Fashion", "Accessories", "Lifestyle"].map(
            (category) => (
              <div
                key={category}
                className="flex h-32 cursor-pointer items-center justify-center rounded-xl border border-gray-200 bg-gray-50 font-semibold transition hover:bg-gray-100"
              >
                {category}
              </div>
            )
          )}
        </div>
      </section>

      {/* Products Placeholder */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-end justify-between">
            <div>
              <h2 className="text-2xl font-bold">Latest Products</h2>

              <p className="mt-2 text-gray-500">
                Check out our newest products.
              </p>
            </div>

            <a
              href="/products"
              className="text-sm font-semibold underline"
            >
              View All
            </a>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="overflow-hidden rounded-xl border border-gray-200 bg-white"
              >
                <div className="h-56 bg-gray-200" />

                <div className="p-4">
                  <div className="h-5 w-3/4 rounded bg-gray-200" />

                  <div className="mt-3 h-4 w-1/2 rounded bg-gray-100" />

                  <div className="mt-4 h-5 w-1/3 rounded bg-gray-200" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;