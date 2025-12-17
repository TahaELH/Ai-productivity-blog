import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import {
  Calendar,
  Clock,
  User,
  ArrowLeft,
  Share2,
  Bookmark,
} from "lucide-react";

import { generateBlogMetadata } from "@/lib/metadata";
import { blogPosts } from "@/lib/blog-posts";

// ---------------------------------------------
// Helpers
// ---------------------------------------------
const getPost = async (slug: string) => {
  return blogPosts[slug] ?? null;
};

// ---------------------------------------------
// Metadata
// ---------------------------------------------
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = await getPost(params.slug);

  if (!post) {
    return {
      title: "Post Not Found - AI Productivity Blog",
      description: "The requested blog post could not be found.",
    };
  }

  return generateBlogMetadata(
    post.content,
    post.title,
    `Comprehensive review of ${post.title}. Discover the best AI tools for enhanced productivity.`,
    {
      openGraph: {
        images: [post.featuredImage],
        publishedTime: post.publishedAt,
        authors: [post.author.name],
        tags: post.tags,
      },
      twitter: {
        images: [post.featuredImage],
      },
      keywords: post.tags,
    }
  );
}

// ---------------------------------------------
// Page
// ---------------------------------------------
export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPost(params.slug);

  if (!post) {
    notFound();
  }

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: post.author.name,
    jobTitle: post.author.jobTitle || "AI Research Director",
    description: post.author.bio,
    image: post.author.avatar,
    email: post.author.email,
    url: `https://aiproductivityblog.com/author/${post.author.name
      .toLowerCase()
      .replace(/\s+/g, "-")}`,
    sameAs: post.author.sameAs || [],
    worksFor: {
      "@type": "Organization",
      name: "AI Productivity Blog",
      url: "https://aiproductivityblog.com",
    },
    knowsAbout: [
      "Artificial Intelligence",
      "Machine Learning",
      "Productivity Optimization",
      "Workflow Automation",
      "Natural Language Processing",
    ],
  };

  return (
    <>
      {/* Author Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />

      <div className="min-h-screen">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            {/* Breadcrumb */}
            <nav className="mb-6 text-sm text-muted-foreground">
              <Link href="/" className="hover:text-primary">
                Home
              </Link>{" "}
              /{" "}
              <Link
                href={`/category/${post.categorySlug}`}
                className="hover:text-primary"
              >
                {post.category}
              </Link>{" "}
              / <span className="text-foreground">{post.title}</span>
            </nav>

            {/* Back */}
            <Link
              href="/"
              className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-6"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>

            {/* Article */}
            <article className="prose prose-lg max-w-none">
              <header className="mb-8">
                <Badge variant="secondary" className="mb-4">
                  {post.category}
                </Badge>

                <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                  {post.title}
                </h1>

                <div className="flex items-center justify-between text-muted-foreground">
                  <div className="flex flex-wrap items-center gap-4">
                    <span className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      {post.author.name}
                    </span>
                    <span className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      {new Date(post.publishedAt).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </span>
                    <span className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      {post.readTime} min read
                    </span>
                  </div>

                  <div className="flex gap-2">
                    <Button variant="ghost" size="icon">
                      <Share2 className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Bookmark className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </header>

              {/* Featured Image */}
              <div className="relative aspect-video rounded-lg overflow-hidden mb-8">
                <Image
                  src={post.featuredImage}
                  alt={post.title}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 1200px"
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div
                className="prose prose-lg max-w-none prose-headings:scroll-mt-20"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* Tags */}
              <div className="mt-10">
                <h3 className="text-lg font-semibold mb-3">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              <Separator className="my-10" />

              {/* Author */}
              <Card>
                <CardHeader>
                  <CardTitle>About the Author</CardTitle>
                </CardHeader>
                <CardContent className="flex gap-4">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden bg-muted">
                    <Image
                      src={post.author.avatar}
                      alt={post.author.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold">{post.author.name}</h4>
                    {post.author.jobTitle && (
                      <p className="text-sm text-primary">
                        {post.author.jobTitle}
                      </p>
                    )}
                    <p className="text-sm text-muted-foreground mt-2">
                      {post.author.bio}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </article>
          </div>
        </div>
      </div>
    </>
  );
}
