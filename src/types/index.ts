export type Category = {
  id: string;
  label: string;
  slug: string;
};

export type Resource = {
  id: string;
  title: string;
  channelName: string;
  description: string;
  youtubeUrl: string;
  thumbnailUrl: string;
  category: string;
  tags: string[];
  language: "English" | "French" | "Arabic";
  type: "video" | "playlist" | "course";
};
