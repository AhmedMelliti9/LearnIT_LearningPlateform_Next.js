import Image from "next/image";
import { Resource } from "@/types";

interface ResourceCardProps {
  resource: Resource;
}

const languageBadgeStyles: Record<
  Resource["language"],
  string
> = {
  English: "bg-[#dbeafe] text-[#1e40af]",
  French: "bg-[#ede9fe] text-[#5b21b6]",
  Arabic: "bg-[#fef3c7] text-[#92400e]",
};

export default function ResourceCard({ resource }: ResourceCardProps) {
  return (
    <article>
      <a
        href={resource.youtubeUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block bg-surface border border-border rounded-lg overflow-hidden cursor-pointer transition-all duration-200 ease-in-out hover:-translate-y-[2px] hover:shadow-[0_4px_12px_rgba(0,0,0,0.12)]"
        style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.08)" }}
      >
        {/* Thumbnail */}
        <div className="relative aspect-video">
          <Image
            src={resource.thumbnailUrl}
            alt={resource.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover"
          />
          {/* Language badge */}
          <span
            className={`absolute top-2.5 right-2.5 text-[11px] font-medium uppercase tracking-[0.05em] px-2 py-[3px] rounded-[4px] ${languageBadgeStyles[resource.language]}`}
          >
            {resource.language}
          </span>
        </div>

        {/* Card body */}
        <div className="px-4 py-3.5">
          <p className="text-[12px] font-medium text-text-muted mb-[3px] uppercase tracking-[0.04em]">
            {resource.channelName}
          </p>
          <h3 className="text-[14px] font-semibold text-text-primary line-clamp-2 mb-1.5 leading-[1.4]">
            {resource.title}
          </h3>
          <p className="text-[12px] text-[#9ca3af] line-clamp-2 leading-[1.5]">
            {resource.description}
          </p>
        </div>

        {/* Card footer */}
        <div className="px-4 py-2.5 border-t border-[#f3f4f6] flex items-center justify-between">
          <span className="bg-[#f3f4f6] text-[#374151] text-[11px] uppercase font-medium px-2 py-[3px] rounded-[4px]">
            {resource.type}
          </span>
          <span className="text-[14px] text-[#9ca3af]" aria-hidden="true">
            &#8599;
          </span>
        </div>
      </a>
    </article>
  );
}
