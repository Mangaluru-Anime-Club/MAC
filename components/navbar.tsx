import Link from "next/link"

export function Navbar() {

  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-white border-b z-50">
      <nav className="h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-full flex items-center justify-between">
          {/* Left Section */}
          <div className="flex items-center space-x-6">
            <Link href="/" className="text-gray-600 hover:text-gray-900 text-lg font-semibold">
              Home
            </Link>
            <Link href="/blog" className="text-gray-600 hover:text-gray-900 text-lg font-semibold">
              Blog
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-gray-900 text-lg font-semibold">
              about
            </Link>


            <Link href="/socials" className="text-gray-600 hover:text-gray-900 text-lg font-semibold">
              socials
            </Link>
          </div>


        </div>
      </nav>
    </header>
  )
}
