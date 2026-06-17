"use client";

interface HeaderProps {
  title: string;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onMenuToggle: () => void;
}

export default function Header({
  title,
  searchQuery,
  onSearchChange,
  onMenuToggle,
}: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 md:left-[240px] right-0 h-[60px] bg-white border-b border-border z-30 flex items-center justify-between px-5 md:px-8">
      {/* Left: hamburger + title */}
      <div className="flex items-center gap-3">
        <button
          onClick={onMenuToggle}
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-[5px] rounded-md hover:bg-gray-100 transition-colors"
          aria-label="Toggle menu"
        >
          <span className="block w-[18px] h-[2px] bg-text-primary rounded-full" />
          <span className="block w-[18px] h-[2px] bg-text-primary rounded-full" />
          <span className="block w-[18px] h-[2px] bg-text-primary rounded-full" />
        </button>
        <h2 className="text-[16px] font-semibold text-text-primary truncate">
          {title}
        </h2>
      </div>

      {/* Right: search */}
      <div className="hidden sm:block">
        <input
          id="search-input"
          type="text"
          placeholder="Search resources..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-[260px] border border-border rounded-[6px] px-3 py-2 text-[14px] text-text-primary placeholder:text-text-muted/60 focus:border-primary focus:outline-none transition-colors"
        />
      </div>

      {/* Mobile search */}
      <div className="sm:hidden">
        <input
          id="search-input-mobile"
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-[140px] border border-border rounded-[6px] px-3 py-2 text-[13px] text-text-primary placeholder:text-text-muted/60 focus:border-primary focus:outline-none transition-colors"
        />
      </div>
    </header>
  );
}
