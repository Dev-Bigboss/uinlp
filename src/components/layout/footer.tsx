// components/layout/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-black text-gray-300 dark:text-gray-400 py-12 border-t border-gray-800 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="mb-3 text-base font-medium">
          © {new Date().getFullYear()} University of Ibadan Natural Language
          Processing Unit
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Connecting Africa through Language Technology
        </p>
        <div className="mt-6 flex justify-center gap-6 text-xs">
          <a
            href="/privacy"
            className="hover:text-white dark:hover:text-gray-200 transition"
          >
            Privacy Policy
          </a>
          <a
            href="/terms"
            className="hover:text-white dark:hover:text-gray-200 transition"
          >
            Terms of Use
          </a>
          <a
            href="/contact"
            className="hover:text-white dark:hover:text-gray-200 transition"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
