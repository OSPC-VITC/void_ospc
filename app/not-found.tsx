import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-4">
      <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-violet-700">
        404 - Page Not Found
      </h1>
      <p className="text-lg md:text-xl mb-8 text-gray-300">
        The page you are looking for doesn&apos;t exist or has been moved.
      </p>
      <Link 
        href="/" 
        className="px-6 py-3 bg-gradient-to-r from-purple-600 to-violet-800 rounded-md hover:from-purple-700 hover:to-violet-900 transition-all duration-300"
      >
        Return Home
      </Link>
    </div>
  );
} 