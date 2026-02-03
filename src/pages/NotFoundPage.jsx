import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-xl px-4 py-20 text-center">
        <h1 className="text-5xl font-bold text-gray-900">404</h1>
        <p className="mt-3 text-gray-600">Page not found.</p>
        <Link
          to="/"
          className="mt-6 inline-block rounded-2xl bg-gray-900 px-5 py-3 text-white"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}
