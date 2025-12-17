import { Metadata } from "next";

/**
 * Extracts plain text from HTML content
 */
function extractPlainText(html: string): string {
  // Remove HTML tags and decode entities
  const text = html
    .replace(/<[^>]*>/g, " ") // Remove HTML tags
    .replace(/&nbsp;/g, " ") // Replace &nbsp; with space
    .replace(/&amp;/g, "&") // Decode &amp;
    .replace(/&lt;/g, "<") // Decode &lt;
    .replace(/&gt;/g, ">") // Decode &gt;
    .replace(/&quot;/g, '"') // Decode &quot;
    .replace(/&#39;/g, "'") // Decode &#39;
    .replace(/\s+/g, " ") // Replace multiple spaces with single space
    .trim();

  return text;
}

/**
 * Extracts H1 tag content from HTML
 * Handles nested tags and various HTML structures
 */
function extractH1(html: string): string | null {
  // Try to match H1 with nested content (non-greedy, case-insensitive)
  const h1Match = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
  if (h1Match && h1Match[1]) {
    const h1Content = extractPlainText(h1Match[1]).trim();
    if (h1Content.length > 0) {
      return h1Content;
    }
  }
  return null;
}

/**
 * Generates SEO description from content (first 160 characters)
 */
function generateDescription(content: string, maxLength: number = 160): string {
  const plainText = extractPlainText(content);
  
  if (plainText.length <= maxLength) {
    return plainText;
  }

  // Try to cut at a sentence boundary
  const truncated = plainText.substring(0, maxLength);
  const lastPeriod = truncated.lastIndexOf(".");
  const lastExclamation = truncated.lastIndexOf("!");
  const lastQuestion = truncated.lastIndexOf("?");
  const lastSentenceEnd = Math.max(lastPeriod, lastExclamation, lastQuestion);

  if (lastSentenceEnd > maxLength * 0.7) {
    // If we found a sentence end reasonably close to the limit, use it
    return truncated.substring(0, lastSentenceEnd + 1).trim();
  }

  // Otherwise, cut at word boundary
  const lastSpace = truncated.lastIndexOf(" ");
  if (lastSpace > maxLength * 0.8) {
    return truncated.substring(0, lastSpace).trim() + "...";
  }

  return truncated.trim() + "...";
}

/**
 * Generates SEO title from H1 or fallback title
 */
function generateTitle(h1: string | null, fallbackTitle: string): string {
  if (h1 && h1.trim()) {
    return h1.trim();
  }
  return fallbackTitle;
}

/**
 * Generates dynamic metadata for blog posts
 * 
 * Automatically extracts:
 * - SEO Title: From H1 tag in content (falls back to fallbackTitle if no H1 found)
 * - SEO Description: First 160 characters of plain text from content
 * 
 * @param content - HTML content of the blog post
 * @param fallbackTitle - Title to use if no H1 tag is found in content
 * @param fallbackDescription - Optional fallback description (used if generated one is too short)
 * @param additionalMetadata - Additional metadata to merge (OpenGraph, Twitter, etc.)
 * @returns Complete Metadata object ready for Next.js generateMetadata
 * 
 * @example
 * ```ts
 * const metadata = generateBlogMetadata(
 *   post.content,
 *   post.title,
 *   "Default description",
 *   { openGraph: { images: [post.image] } }
 * );
 * ```
 */
export function generateBlogMetadata(
  content: string,
  fallbackTitle: string,
  fallbackDescription?: string,
  additionalMetadata?: Partial<Metadata>
): Metadata {
  const h1 = extractH1(content);
  const seoTitle = generateTitle(h1, fallbackTitle);
  const seoDescription = generateDescription(content, 160);

  // Use fallback description if generated one is too short or if provided
  const finalDescription = 
    fallbackDescription && fallbackDescription.length > 50
      ? fallbackDescription
      : seoDescription.length > 50
      ? seoDescription
      : fallbackDescription || seoDescription;

  return {
    title: `${seoTitle} - AI Productivity Blog`,
    description: finalDescription,
    ...additionalMetadata,
    openGraph: {
      title: seoTitle,
      description: finalDescription,
      type: "article",
      ...additionalMetadata?.openGraph,
    },
    twitter: {
      card: "summary_large_image",
      title: seoTitle,
      description: finalDescription,
      ...additionalMetadata?.twitter,
    },
  };
}

