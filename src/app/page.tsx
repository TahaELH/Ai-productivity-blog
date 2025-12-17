import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, User, ArrowRight, BookOpen, Zap, Lightbulb, Target } from "lucide-react";
import { HeaderAd, FooterAd } from "@/components/ad-slots";

export const metadata: Metadata = {
  title: "AI Productivity Blog - Tools & Techniques for Enhanced Workflow",
  description: "Discover the latest AI tools and productivity techniques to supercharge your workflow. Expert reviews, guides, and insights on AI-powered productivity solutions.",
};

export default function HomePage() {
  const featuredPosts = [
    {
      id: 1,
      title: "Top 10 AI Writing Tools for Content Creators in 2024",
      excerpt: "Comprehensive review of the best AI-powered writing assistants that can help you create high-quality content faster than ever.",
      author: "Sarah Johnson",
      date: "2024-01-15",
      readTime: 8,
      category: "AI Writing Tools",
      categorySlug: "ai-writing-tools",
      slug: "top-10-ai-writing-tools-2024",
      image: "/api/placeholder/400/250",
    },
    {
      id: 2,
      title: "How to Automate Your Workflow with AI: A Complete Guide",
      excerpt: "Learn how to leverage artificial intelligence to automate repetitive tasks and focus on what matters most in your business.",
      author: "Michael Chen",
      date: "2024-01-12",
      readTime: 12,
      category: "Productivity Automation",
      categorySlug: "productivity-automation",
      slug: "automate-workflow-ai-guide",
      image: "/api/placeholder/400/250",
    },
    {
      id: 3,
      title: "AI Research Tools That Will Revolutionize Your Data Analysis",
      excerpt: "Discover cutting-edge AI tools that can process and analyze vast amounts of data to uncover valuable insights for your research.",
      author: "Dr. Emily Roberts",
      date: "2024-01-10",
      readTime: 10,
      category: "AI Research & Analysis",
      categorySlug: "ai-research-analysis",
      slug: "ai-research-tools-data-analysis",
      image: "/api/placeholder/400/250",
    },
  ];

  const categories = [
    {
      name: "AI Writing Tools",
      slug: "ai-writing-tools",
      description: "Comprehensive reviews of AI-powered writing assistants",
      icon: BookOpen,
      postCount: 24,
    },
    {
      name: "Productivity Automation",
      slug: "productivity-automation",
      description: "Tools to automate and streamline your workflow",
      icon: Zap,
      postCount: 18,
    },
    {
      name: "AI Research & Analysis",
      slug: "ai-research-analysis",
      description: "Advanced AI tools for research and data analysis",
      icon: Lightbulb,
      postCount: 15,
    },
    {
      name: "Task Management AI",
      slug: "task-management-ai",
      description: "Smart task management and project planning tools",
      icon: Target,
      postCount: 12,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Header Ad */}
      <HeaderAd className="mb-8" />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/10 to-primary/5 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Master Your Productivity with
              <span className="text-primary"> AI-Powered Tools</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Discover the latest artificial intelligence tools and techniques to supercharge your workflow, 
              automate repetitive tasks, and achieve more in less time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8" asChild>
                <Link href="#featured">
                  <BookOpen className="mr-2 h-5 w-5" />
                  Start Reading
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8" asChild>
                <Link href="/contact">
                  Subscribe to Newsletter
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section id="featured" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Articles</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Hand-picked insights and reviews to help you leverage AI for maximum productivity
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPosts.map((post) => (
              <Card key={post.id} className="group cursor-pointer overflow-hidden hover:shadow-lg transition-shadow">
                <Link href={`/blog/${post.slug}`}>
                  <div className="aspect-video bg-muted relative overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover"
                      loading="lazy"
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <Badge variant="secondary">{post.category}</Badge>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="line-clamp-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <User className="h-4 w-4" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="h-4 w-4" />
                          <span>{post.readTime} min</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                    <div className="mt-4">
                      <Button variant="ghost" className="p-0 h-auto font-normal text-primary">
                        Read More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Explore Categories</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Dive deep into specific areas of AI productivity with our expert-curated categories
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => {
              const IconComponent = category.icon;
              return (
                <Link
                  key={category.slug}
                  href={`/category/${category.slug}`}
                  className="group"
                >
                  <Card className="h-full hover:shadow-lg transition-all hover:scale-105">
                    <CardHeader className="text-center">
                      <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                        <IconComponent className="h-6 w-6" />
                      </div>
                      <CardTitle className="text-xl">{category.name}</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                      <p className="text-muted-foreground mb-4">
                        {category.description}
                      </p>
                      <div className="text-sm text-muted-foreground">
                        {category.postCount} articles
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto bg-gradient-to-r from-primary/5 to-primary/10">
            <CardContent className="p-8 md:p-12 text-center">
              <h2 className="text-3xl font-bold mb-4">
                Stay Ahead of the AI Curve
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Get weekly updates on the latest AI productivity tools, tips, and strategies delivered straight to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <Button className="px-8" asChild>
                  <Link href="/contact">
                    Subscribe
                  </Link>
                </Button>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                Join 10,000+ professionals. No spam, unsubscribe anytime.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer Ad */}
      <FooterAd className="mb-8" />
    </div>
  );
}