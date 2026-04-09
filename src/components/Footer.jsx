export default function Footer() {
  return (
    <footer className="border-t mt-10 py-6 text-center text-gray-600 bg-white">
      <p className="text-sm">
        © {new Date().getFullYear()} BookStore. All rights reserved.
      </p>
    </footer>
  );
}
