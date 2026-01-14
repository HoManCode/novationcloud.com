export default function Footer() {
  return (
    <footer className="bg-dark border-t border-white/10 py-6 text-gray-500 text-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0">
        <span>© {new Date().getFullYear()} NovationCloud</span>
        <span>Cloud · DevOps · Modernisation</span>
      </div>
    </footer>
  );
}
