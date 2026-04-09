import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-screen flex flex-col items-center justify-center text-center bg-gray-100">
      {/* Animated 404 */}
      <h1 className="text-7xl font-bold text-red-500 animate-bounce">404</h1>

      <h2 className="text-2xl mt-4 font-semibold animate-pulse">
        Page Not Found
      </h2>

      <p className="mt-2 text-gray-500">
        Oops! The page you're looking for doesn't exist.
      </p>

      {/* Button */}
      <Link
        href="/"
        className="mt-6 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
      >
        Go Home
      </Link>

      {/* Animated circle */}
      <div className="mt-10 w-16 h-16 bg-red-400 rounded-full animate-ping"></div>
    </div>
  );
}
