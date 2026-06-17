"use client";

import { useState } from "react";
import { resources } from "@/data/resources";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import ResourceCard from "@/components/ResourceCard";

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const filteredResources = resources.filter((resource) => {
    if (!searchQuery.trim()) return true;
    const query = searchQuery.toLowerCase();
    return (
      resource.title.toLowerCase().includes(query) ||
      resource.channelName.toLowerCase().includes(query) ||
      resource.description.toLowerCase().includes(query) ||
      resource.tags.some((tag) => tag.toLowerCase().includes(query))
    );
  });

  return (
    <>
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <Header
        title="All Resources"
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onMenuToggle={() => setSidebarOpen(!sidebarOpen)}
      />

      <main className="md:ml-[240px] mt-[60px] p-6 md:p-8 bg-background min-h-[calc(100vh-60px)]">
        {/* Intro section */}
        <section className="pb-6 border-b border-border mb-8">
          <h1 className="text-[26px] font-semibold text-text-primary">
            Discover the best IT learning resources
          </h1>
          <p className="text-[15px] text-text-muted mt-2">
            Most people never finish learning because they spend more time
            searching for resources than actually studying. LearnIT solves that
            — every resource here is hand-picked, ordered for beginners, and
            links directly to the best free content on YouTube. Pick a topic
            from the sidebar and start today.
          </p>
        </section>

        {/* Search results indicator */}
        {searchQuery.trim() && (
          <p className="text-[13px] text-text-muted mb-5">
            Showing {filteredResources.length} result
            {filteredResources.length !== 1 ? "s" : ""} for &ldquo;
            {searchQuery}&rdquo;
          </p>
        )}

        {/* Resource grid */}
        {filteredResources.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredResources.map((resource) => (
              <ResourceCard key={resource.id} resource={resource} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20">
            <p className="text-[16px] text-text-primary font-medium mb-2">
              No resources found for &ldquo;{searchQuery}&rdquo;
            </p>
            <p className="text-[14px] text-text-muted">
              Try a different search term or browse categories from the sidebar.
            </p>
          </div>
        )}

        {/* Footer */}
        <footer className="pt-12 border-t border-border mt-12">
          <p className="text-[13px] text-[#9ca3af] text-center">
            LearnIT is curated by Ahmed Melliti, a software engineer passionate
            about open education.
          </p>
        </footer>
      </main>
    </>
  );
}
