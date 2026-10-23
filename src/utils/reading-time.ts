const WORDS_PER_MINUTE = 200;

export function estimateReadingTime(body: string): string {
  // Estimate prose reading time without counting fenced code examples.
  const prose = body
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/<[^>]*>/g, " ")
    .replace(/!?\[([^\]]+)\]\([^)]*\)/g, "$1");

  const words = prose.match(/[\p{L}\p{N}]+(?:['’_-][\p{L}\p{N}]+)*/gu);
  const minutes = Math.max(
    1,
    Math.ceil((words?.length ?? 0) / WORDS_PER_MINUTE),
  );

  return `${minutes} min read`;
}
