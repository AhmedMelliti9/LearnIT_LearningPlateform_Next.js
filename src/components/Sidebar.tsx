"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { categories } from "@/data/resources";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const pathname = usePathname();

  const isActive = (slug: string) => {
    return pathname === `/${slug}`;
  };

  const isHome = pathname === "/";

  return (
    <>
      {/* Mobile backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      <aside
        className={`fixed top-0 left-0 h-screen w-[240px] bg-primary z-40 overflow-y-auto flex flex-col transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "-translate-x-full"
          } md:translate-x-0`}
      >
        {/* Logo section */}
        <div className="px-6 pt-7 pb-6">
          <Link href="/" onClick={onClose}>
            <h1 className="text-white text-[20px] font-semibold tracking-tight">
              LearnIT
            </h1>
            <p className="text-[12px] mt-0.5" style={{ color: "rgba(255,255,255,0.45)" }}>
              by Ahmed Melliti
            </p>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto px-3">
          <Link
            href="/"
            onClick={onClose}
            className={`flex items-center px-3 py-2.5 rounded-md text-[13px] font-medium mb-0.5 transition-all duration-150 ${isHome
                ? "bg-white/10 text-white border-l-[3px] border-accent"
                : "text-white/55 hover:bg-white/[0.06] hover:text-white/90 border-l-[3px] border-transparent"
              }`}
          >
            All Resources
          </Link>

          <div className="mt-3 mb-2 px-3">
            <p
              className="text-[10px] font-medium uppercase tracking-[0.08em]"
              style={{ color: "rgba(255,255,255,0.3)" }}
            >
              Categories
            </p>
          </div>

          {categories
            .filter((category) => !["docker", "kubernetes", "springboot"].includes(category.id))
            .map((category) => (
              <Link
                key={category.id}
                href={`/${category.slug}`}
                onClick={onClose}
                className={`flex items-center px-3 py-2.5 rounded-md text-[13px] font-medium mb-0.5 transition-all duration-150 ${isActive(category.slug)
                    ? "bg-white/10 text-white border-l-[3px] border-accent"
                    : "text-white/55 hover:bg-white/[0.06] hover:text-white/90 border-l-[3px] border-transparent"
                  }`}
              >
                {category.label}
              </Link>
            ))}

          <Link
            href="/docker"
            onClick={onClose}
            className={`flex items-center px-3 py-2.5 rounded-md text-[13px] font-medium mb-0.5 transition-all duration-150 ${isActive("docker")
                ? "bg-white/10 text-white border-l-[3px] border-accent"
                : "text-white/55 hover:bg-white/[0.06] hover:text-white/90 border-l-[3px] border-transparent"
              }`}
          >
            Docker
          </Link>
          <Link
            href="/kubernetes"
            onClick={onClose}
            className={`flex items-center px-3 py-2.5 rounded-md text-[13px] font-medium mb-0.5 transition-all duration-150 ${isActive("kubernetes")
                ? "bg-white/10 text-white border-l-[3px] border-accent"
                : "text-white/55 hover:bg-white/[0.06] hover:text-white/90 border-l-[3px] border-transparent"
              }`}
          >
            Kubernetes
          </Link>
          <Link
            href="/springboot"
            onClick={onClose}
            className={`flex items-center px-3 py-2.5 rounded-md text-[13px] font-medium mb-0.5 transition-all duration-150 ${isActive("springboot")
                ? "bg-white/10 text-white border-l-[3px] border-accent"
                : "text-white/55 hover:bg-white/[0.06] hover:text-white/90 border-l-[3px] border-transparent"
              }`}
          >
            Spring Boot
          </Link>
        </nav>

        {/* About */}
        <div
          style={{
            padding: "16px",
            borderTop: "1px solid rgba(255,255,255,0.08)",
            marginTop: "auto",
          }}
        >
          <p
            style={{
              fontSize: "11px",
              lineHeight: 1.6,
              color: "rgba(255,255,255,0.4)",
              margin: 0,
            }}
          >
            LearnIT cuts through tutorial hell by giving you one clear starting
            point per topic — no more wasting hours searching YouTube for where
            to begin. Pick a category, start the first resource, and keep
            moving. Built by Ahmed Melliti, software engineer.
          </p>
        </div>
      </aside>
    </>
  );
}
